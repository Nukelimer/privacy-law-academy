import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import Header from "../components/Header";


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
