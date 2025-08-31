"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User as FirebaseUser,
} from "firebase/auth";
import { auth as clientAuth } from "@/lib/firebase/client";
import { User, Dictionary, Locale } from "@/types/types";
import { createUserProfile } from "@/actions/userActions";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import { cookies } from "next/headers";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    displayName?: string
  ) => Promise<void>;
  signOutUser: () => Promise<void>;
  resetPassword: (
    email: string
  ) => Promise<{ success: boolean; message: string }>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function manageSession(
  firebaseUser: FirebaseUser | null
): Promise<User | null> {
  if (firebaseUser) {
    const idToken = await firebaseUser.getIdToken(true);
    const response = await fetch("/api/auth/verify-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.user as User;
    }
  }
  await fetch("/api/auth/verify-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ logout: true }),
  });
  return null;
}

export function AuthProvider({
  children,
  locale,
  dictionary,
}: {
  children: React.ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(clientAuth, async (firebaseUser) => {
      setLoading(true);
      try {
        const appUser = await manageSession(firebaseUser);
        setUser(appUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const cred = await signInWithEmailAndPassword(
        clientAuth,
        email,
        password
      );

      // Get fresh ID token from Firebase
      const idToken = await cred.user.getIdToken(true);

      const res = await fetch("/api/auth/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      router.push(`/${locale}/dashboard`);
      if (!res.ok) {
        throw new Error("Failed to create session cookie");
      }
      toast({ title: dictionary.auth.loginSuccess });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const signUp = async (
    email: string,
    password: string,
    displayName?: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        clientAuth,
        email,
        password
      );
      // await createUserProfile(userCredential.user.uid, email, displayName || '');
      toast({ title: dictionary.auth.signupSuccess });
      router.push(`/${locale}/dashboard`);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(clientAuth);
      // await cookies().delete("session");
      await fetch("/api/auth/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ logout: true }),
      });

      toast({ title: dictionary.auth.logoutSuccess });
      router.push(`/${locale}/login`);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const resetPassword = async (
    email: string
  ): Promise<{ success: boolean; message: string }> => {
    try {
      await sendPasswordResetEmail(clientAuth, email);
      return { success: true, message: "Password reset email sent." };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOutUser,
    resetPassword,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
