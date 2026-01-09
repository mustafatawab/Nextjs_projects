"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed.user);
      setToken(parsed.token);
    }
  }, []);

  useEffect(() => {
    if (user && token) {
      localStorage.setItem("auth", JSON.stringify({ user, token }));
    } else {
      localStorage.removeItem("auth");
    }
  }, [user, token]);

  // ----- Login Function -----
  async function login(email: string, password: string) {
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status !== 200) {
      setLoading(false);
      toast.error(data.message);
      return;
    }

    setUser(data.user);
    setToken(data.token);
    setLoading(false);
    router.push("/");
  }

  // ----- Register Function -----
  async function register(payload: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.status !== 200) {
      setLoading(false);
      toast.error(data.message);
      return;
    }

    setUser(data.user);
    setToken(data.token);

    setLoading(false);
    router.push("/login");
  }

  // ------- Logout ----------
  async function logout() {
    setLoading(true);
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      setLoading(false);
      throw new Error("Logout Failed");
    }

    setUser(null);
    setToken(null);
    setLoading(false);
    router.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside the AuthProvider");
  return ctx;
}
