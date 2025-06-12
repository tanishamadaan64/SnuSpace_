import { Inter } from "next/font/google";
import "./globals.css";
//import '../styles/globals.css';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script"; // ✅ Import Script

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnuSpace - SNU Resource Hub",
  description: "Access past year papers, course materials, and resources for all departments at SNU",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Umami Analytics Script */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="123335e0-6a78-4c21-83c8-b4ca1aee001e"
          strategy="lazyOnload"
        />
      </head>
      
    </html>
  );
}
