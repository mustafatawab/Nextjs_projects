import { NextRequest, NextResponse } from 'next/server';
import { getFirestore } from '@/lib/firebase/admin';

const GUMROAD_SECRET = process.env.GUMROAD_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const db = await getFirestore();
  try {
    const rawBody = await req.text();
    const data = new URLSearchParams(rawBody);

    const secret = data.get('secret');
    if (secret !== GUMROAD_SECRET) {
      console.warn('Invalid Gumroad secret received.');
      return NextResponse.json({ success: false, message: 'Invalid secret.' }, { status: 403 });
    }

    const email = data.get('email');
    const licenseKey = data.get('license_key');
    const productName = data.get('product_name');

    if (!email || !licenseKey) {
      console.error('Missing email or license_key in Gumroad payload.');
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }

    const usersRef = db.collection('users');
    const userQuery = await usersRef.where('email', '==', email).limit(1).get();

    if (userQuery.empty) {
      console.log(`Webhook received for non-existent user: ${email}`);
      return NextResponse.json({ success: true, message: 'User not found, but webhook acknowledged.' });
    }

    const userDoc = userQuery.docs[0];
    const userId = userDoc.id;
    const userData = userDoc.data();

    let durationInDays = 0;
    if (productName?.toLowerCase().includes('annuel') || productName?.toLowerCase().includes('yearly')) {
      durationInDays = 365;
    } else if (productName?.toLowerCase().includes('mensuel') || productName?.toLowerCase().includes('monthly')) {
      durationInDays = 30;
    } else {
        durationInDays = 30;
    }

    const now = Date.now();
    const currentPremiumExpiresAt = (userData?.premium_expires_at && userData.premium_expires_at > now) 
      ? userData.premium_expires_at 
      : now;
    
    const newPremiumExpiresAt = currentPremiumExpiresAt + (durationInDays * 24 * 60 * 60 * 1000);

    await userDoc.ref.update({
      premium_expires_at: newPremiumExpiresAt
    });

    console.log(`Premium status successfully updated for user ${userId} via Gumroad webhook.`);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error processing Gumroad webhook:', error);
    return NextResponse.json({ success: false, message: 'An internal error occurred.' }, { status: 500 });
  }
}
