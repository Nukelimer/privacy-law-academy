import type { Metadata } from "next";
import { headers } from "next/headers";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";





const figtree = Figtree({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

   
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${figtree.className} antialiased`}
      >

         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          
          </ThemeProvider>
      </body>
      </html>
      
   
  );
}
