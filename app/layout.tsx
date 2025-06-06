import type React from "react";
import "@/app/globals.css";
import { Mona_Sans as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import Header from "@/components/header";
import Footer from "@/components/footer";
import localFont from "next/font/local";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.applicationName,
  category: siteConfig.category,
  viewport: siteConfig.viewport,
  alternates: siteConfig.alternates,
  openGraph: siteConfig.openGraph,
  robots: siteConfig.robots,
  twitter: siteConfig.twitter,
};

const vazir = localFont({
  src: "../fonts/Vazirmatn.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          vazir.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
