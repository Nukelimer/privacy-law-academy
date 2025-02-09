import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import Header from "../components/Header";
import { LightToggle } from "../components/Light_Toggle";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Privacy Academy",
  description: "An LMS for Data Privacy",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
      <div className="min-h-screen flex flex-col">
        <div className="dark:bg-neutral-950 bg-white">


        <Header />
        
        </div>

      <main
        className={`flex-1 antialiased`}
      >
        {children}
      </main>
      </div>
      
      </ClerkProvider>
  );
}
