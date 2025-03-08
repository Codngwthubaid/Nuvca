import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NUVCA - Video Conferencing App",
  description: "NUCVA - is a modern video Conferencing application built with Next.js and styled using Tailwind CSS. It leverages multiple packages for enhanced functionality, ensuring a seamless user experience. The app features real-time communication, user authentication, and a scalable architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
     layout: {
      logoImageUrl : "/icons/logo.svg",
      socialButtonsVariant: "iconButton"
     }
    }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
        >
          {children}
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
