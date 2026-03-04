import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "KIDDIECARE Center | Quality Childcare & Early Education",
  description: "KIDDIECARE Center provides high-quality childcare and early education for children ages 6 weeks to 5 years in a safe, nurturing, and fun environment.",
  openGraph: {
    title: "KIDDIECARE Center | Quality Childcare & Early Education",
    description: "Guiding young children through their most critical developmental years with experienced teachers and engaging activities.",
    type: "website",
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
        className={`${fredoka.variable} ${nunito.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
