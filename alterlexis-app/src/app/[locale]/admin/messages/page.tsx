'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card'; // Removed unused CardHeader, CardTitle, CardDescription
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Skeleton } from '@/components/ui/skeleton';

interface ContactMessage {
    id: string;
    email: string;
    message: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    read: boolean;
}

const AdminMessagesPage = () => {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage));
            setMessages(messagesData);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="space-y-4">
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
            </div>
        )
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Messages de Contact</h1>
            {messages.length === 0 ? (
                <p>Aucun message pour le moment.</p>
            ) : (
                <Accordion type="single" collapsible className="w-full">
                    {messages.map((msg) => (
                        <AccordionItem key={msg.id} value={msg.id}>
                            <AccordionTrigger>
                                <div className="flex items-center justify-between w-full pr-4">
                                    <div className="flex items-center gap-4">
                                       {!msg.read && <Badge>Nouveau</Badge>}
                                       <span className="font-semibold">{msg.email}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {format(new Date(msg.createdAt.seconds * 1000), 'd MMMM yyyy à HH:mm', { locale: fr })}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Card>
                                    <CardContent className="p-4">
                                        <p className="whitespace-pre-wrap">{msg.message}</p>
                                    </CardContent>
                                </Card>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </div>
    );
};

export default AdminMessagesPage;
