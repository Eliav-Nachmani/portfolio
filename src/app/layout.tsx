import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import KnobWrapper from "@/components/layout/KnobWrapper"; // ✅ Server Component
import ClientWrapper from "@/components/layout/ClientWrapper"; // ✅ Move animations & navigation logic here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eliav Nachmani | Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-black text-white`}
      >
        {/* Wrap the app inside KnobWrapper & ClientWrapper */}
        <KnobWrapper>
          <ClientWrapper>{children}</ClientWrapper> 
        </KnobWrapper>
      </body>
    </html>
  );
}
