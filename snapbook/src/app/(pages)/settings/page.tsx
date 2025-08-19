"use client";

import AppLayout from "@/components/AppLayout";
import { UserRound, Bell, KeyRound, ShieldCheck, ChevronRight } from "lucide-react";

/**
 * Drop this file at: app/settings/page.tsx
 * Make sure TailwindCSS is installed. No external UI libs required.
 */
export default function SettingsPage() {
  return (
    <AppLayout>
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 p-2 md:p-6">
      <section className="mx-auto ">
        <h1 className="text-4xl font-bold leading-tight text-green-950! dark:text-green-50!">Settings</h1>

        <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-black/10 p-3 sm:p-6 shadow-sm">
          <h2 className="px-1 text-2xl font-semibold dark:text-green-50">Settings</h2>

          <div className="mt-4 space-y-3">
            <SettingsRow icon={<UserRound className="size-5 dark:text-white" />} title="Profile" />
            <SettingsRow icon={<UserRound className="size-5 dark:text-white" />} title="Account" />
            <SettingsRow icon={<Bell className="size-5 dark:text-white" />} title="Notifications" />
          </div>

          <h3 className="mt-8 px-1 text-2xl font-semibold dark:text-green-50">Security</h3>
          <div className="mt-4 space-y-3">
            <SettingsRow icon={<KeyRound className="size-5 dark:text-white" />} title="Change password" />
            <SettingsRow icon={<ShieldCheck className="size-5 dark:text-white" />} title="Two-factor authentication" />
          </div>
        </div>
      </section>
    </main>
    </AppLayout>
  );
}

function SettingsRow({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <button
      type="button"
      className="group flex w-full items-center rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-black px-5 py-4 text-left    transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400/60"
    >
      <div className="flex items-center gap-4">
        <span className="grid size-9 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:bg-black/40 dark:border-gray-600">
          {icon}
        </span>
        <span className="text-lg font-medium text-gray-900 dark:text-gray-50">{title}</span>
      </div>
      
    </button>
  );
}


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Home,
//   Users,
//   Bookmark,
//   Settings as SettingsIcon,
//   UserRound,
//   Bell,
//   KeyRound,
//   ShieldCheck,
//   ChevronRight,
// } from "lucide-react";

// /**
//  * Drop this file at: app/settings/page.tsx
//  * Make sure TailwindCSS is installed. No external UI libs required.
//  */
// export default function SettingsPage() {
//   return (
//     <main className="min-h-screen bg-emerald-50 text-emerald-900">
//       <div className="mx-auto flex max-w-6xl gap-6 p-4 sm:p-6">
//         {/* Sidebar */}
//         <aside className="sticky top-0 h-[calc(100dvh-2rem)] w-56 shrink-0 rounded-2xl bg-emerald-100/70 p-4 shadow-sm">
//           <div className="mb-4 rounded-xl bg-emerald-200/70 px-4 py-3 text-lg font-semibold tracking-wide">
//             Admin
//           </div>
//           <nav className="space-y-1">
//             <NavItem href="#" icon={<Home className="size-5" />} label="Home" />
//             <NavItem href="#" icon={<Users className="size-5" />} label="Friends" />
//             <NavItem href="#" icon={<Bookmark className="size-5" />} label="Saved" />
//             <NavItem
//               href="#"
//               icon={<SettingsIcon className="size-5" />}
//               label="Settings"
//               active
//             />
//           </nav>
//         </aside>

//         {/* Content */}
//         <section className="flex-1">
//           <h1 className="text-4xl font-bold leading-tight">Settings</h1>

//           <div className="mt-6 rounded-2xl border border-emerald-200/60 bg-white/90 p-4 sm:p-6 shadow-sm">
//             <h2 className="px-1 text-2xl font-semibold">Settings</h2>

//             <div className="mt-4 space-y-3">
//               <SettingsRow icon={<UserRound className="size-5" />} title="Profile" />
//               <SettingsRow icon={<UserRound className="size-5" />} title="Account" />
//               <SettingsRow icon={<Bell className="size-5" />} title="Notifications" />
//             </div>

//             <h3 className="mt-8 px-1 text-2xl font-semibold">Security</h3>
//             <div className="mt-4 space-y-3">
//               <SettingsRow icon={<KeyRound className="size-5" />} title="Change password" />
//               <SettingsRow icon={<ShieldCheck className="size-5" />} title="Two-factor authentication" />
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// function NavItem({
//   href,
//   icon,
//   label,
//   active = false,
// }: {
//   href: string;
//   icon: React.ReactNode;
//   label: string;
//   active?: boolean;
// }) {
//   const pathname = usePathname();
//   const base =
//     "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors";
//   const activeCls = active
//     ? "bg-emerald-200/60 text-emerald-950"
//     : "text-emerald-800 hover:bg-emerald-200/40";
//   return (
//     <Link href={href} className={`${base} ${activeCls}`} aria-current={active ? "page" : undefined}>
//       {icon}
//       <span>{label}</span>
//     </Link>
//   );
// }

// function SettingsRow({ icon, title }: { icon: React.ReactNode; title: string }) {
//   return (
//     <button
//       type="button"
//       className="group flex w-full items-center justify-between rounded-2xl border border-emerald-200 bg-white px-5 py-5 text-left shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
//     >
//       <div className="flex items-center gap-4">
//         <span className="grid size-9 place-items-center rounded-xl border border-emerald-200 bg-emerald-50">
//           {icon}
//         </span>
//         <span className="text-lg font-medium text-emerald-900">{title}</span>
//       </div>
//       <ChevronRight className="size-5 opacity-60 transition group-hover:translate-x-0.5" />
//     </button>
//   );
// }















// // import AppLayout from '@/components/AppLayout'
// // import React from 'react'

// // const Setting = () => {
// //   return (
// //     <AppLayout>
        
// //         Setting
// //     </AppLayout>
// //   )
// // }

// // export default Setting


// "use client";

// import { useState } from "react";
// import { Moon, Sun, User, Bell, Shield, Lock, Globe, Trash2, CreditCard } from "lucide-react";
// import AppLayout from "@/components/AppLayout";

// export default function SettingsPage() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <AppLayout>
//     <div className=" bg-gray-50 dark:bg-gray-900">
//       {/* Sidebar */}
//       {/* <aside className="w-64 bg-emerald-900 text-white p-5 space-y-6">
//         <h2 className="text-2xl font-bold">Snapbook</h2>
//         <nav className="space-y-4">
//           <a href="#" className="flex items-center gap-2 hover:text-emerald-300">
//             <User size={18} /> Profile
//           </a>
//           <a href="#" className="flex items-center gap-2 hover:text-emerald-300">
//             <Bell size={18} /> Notifications
//           </a>
//           <a href="#" className="flex items-center gap-2 hover:text-emerald-300">
//             <Shield size={18} /> Security
//           </a>
//           <a href="#" className="flex items-center gap-2 hover:text-emerald-300">
//             <Globe size={18} /> Language
//           </a>
//         </nav>
//       </aside> */}

//       {/* Main Content */}
//       <main className="flex-1 p-10 space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Settings</h1>

//         {/* Profile Section */}
//         <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Profile</h2>
//           <button className="w-full p-3 rounded-lg bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-800 dark:hover:bg-emerald-700 text-left">
//             Edit Profile
//           </button>
//         </section>

//            <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Account</h2>
          
//         </section>

//         {/* Security Section */}
//         <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Security</h2>
//           <div className="space-y-3">
//             <button className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//               <Lock size={18} /> Change Password
//             </button>
//             <button className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//               <Shield size={18} /> Two-Factor Authentication
//             </button>
//             <button className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-red-100 text-red-600 dark:hover:bg-red-800">
//               <Trash2 size={18} /> Delete Account
//             </button>
//           </div>
//         </section>

//         {/* Preferences */}
//         <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Preferences</h2>
//           <div className="flex items-center justify-between">
//             <span>Dark Mode</span>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg"
//             >
//               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//               {darkMode ? "Light Mode" : "Dark Mode"}
//             </button>
//           </div>
//         </section>

//         {/* Subscription */}
//         <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Subscription</h2>
//           <button className="w-full flex items-center gap-2 p-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600">
//             <CreditCard size={18} /> Manage Billing
//           </button>
//         </section>
//       </main>
//     </div>
//     </AppLayout>
//   );
// }
