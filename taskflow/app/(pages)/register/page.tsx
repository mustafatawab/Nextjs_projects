"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, Unlock, User, Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

const page = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);
  const { register, loading } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Password Does Not Match");
      return;
    }

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast.error("All Fields are required");
      return;
    }

    await register({
      name: form.name,
      email: form.email,
      password: form.password,
    });
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // try {
    //   const res = await fetch("/api/auth/register", {
    //     method: "POST",
    //     body: JSON.stringify(form),
    //   });
    //   const data = await res.json();

    //   if (res.status != 200) {
    //     toast.error(data.message);
    //     return;
    //   }
    //   toast.success("You are registered");
    //   router.push("/login");
    //   setForm({
    //     name: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    // } catch (error) {
    //   toast.error(error as string);
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
            Get started
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Create your account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Start organizing your tasks today
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
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={onHandleChange}
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
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
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <Unlock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">
                Confirm Password
              </Label>
              <div className="relative">
                <div
                  className="cursor-pointer"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                >
                  {showConfirmPass ? (
                    <Unlock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={onHandleChange}
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Password Must Match
              </p>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 gradient-warm shadow-soft transition-smooth hover:shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-button"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Creating account...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Create account
                </span>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?
            <Link
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default page;
