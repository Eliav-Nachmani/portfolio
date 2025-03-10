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
  description: "A futuristic portfolio with a cyberpunk aesthetic.",
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
        {/* Color Overlay */}
        <div
          id="color-overlay"
          className="absolute inset-0 z-50 pointer-events-none transition-all duration-500"
          style={{
            mixBlendMode: "multiply",
            backgroundColor: "rgba(0, 255, 0, 0.2)", // Default to green tint
          }}
        ></div>

        {/* Wrap the app inside KnobWrapper & ClientWrapper */}
        <KnobWrapper>
          <ClientWrapper>{children}</ClientWrapper> 
        </KnobWrapper>
      </body>
    </html>
  );
}
