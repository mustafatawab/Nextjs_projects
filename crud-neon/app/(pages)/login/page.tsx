"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, User, Sparkles, LogIn } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-hot-toast";

const page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const userLoging = async () => {
    return await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        setForm({
          email: "",
          password: "",
        });
        console.log(res);
        toast.success("You are logged in");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!form.email || !form.password) {
      toast.error("All fields are required !!!");
      return;
    }

    await userLoging();

    // try {
    //   toast.promise(
    //     fetch("/api/auth/login", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(form),
    //     }).then(async (res) => {
    //       const data = await res.json();
    //       return data;
    //     }),

    //     {
    //       loading: "Logging.....",
    //       success: <b>You are logged in!</b>,
    //       error: <b>Something went wrong.</b>,
    //     }
    //   );
    //   setForm({
    //     email: "",
    //     password: "",
    //   });
    // } catch (err) {
    //   toast.error(err as string);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="min-h-screen gradient-subtle flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Welcome Back
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Login to your account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Enter your credentials to access your tasks
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 shadow-card"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={onHandleChange}
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={onHandleChange}
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Must be at least 6 characters
              </p>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-button"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Loggin in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </span>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default page;
