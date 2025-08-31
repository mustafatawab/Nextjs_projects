'use server';

import * as z from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

interface SendContactMessageParams {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(params: SendContactMessageParams): Promise<{ success: boolean; message: string }> {
  const validation = ContactSchema.safeParse(params);
  if (!validation.success) {
    return { success: false, message: validation.error.errors[0].message };
  }

  // In a real application, you would integrate an email service like Resend, SendGrid, or Nodemailer here.
  // For this placeholder, we simulate a successful sending process.
  console.log('--- New Contact Message ---');
  console.log(`From: ${params.name} <${params.email}>`);
  console.log(`Message: ${params.message}`);
  console.log('-------------------------');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: "Your message has been sent successfully!" };
}
