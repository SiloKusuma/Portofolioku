import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "silokusuma.dev",
  description:
    "Full Stack Developer — portofolio pribadi",
  keywords: [
    "frontend",
    "developer",
    "portfolio",
    "silokusuma.dev",
    "react",
    "next.js",
  ],
  openGraph: {
    title: "silokusuma.dev",
    description: "Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-black text-white`}>
        <Navbar />
        <main className="animate-blur-in">{children}</main>
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
