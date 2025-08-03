import type { Metadata } from "next";

import "@/app/globals.css";

import type React from "react";

import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ErrorBoundary from "@/components/shared/error-boundary";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/const/site";
import { cn } from "@/lib/utils";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hamgerd.ir"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.applicationName,
  category: siteConfig.category,
  alternates: siteConfig.alternates,
  openGraph: siteConfig.openGraph,
  robots: siteConfig.robots,
  twitter: siteConfig.twitter,
};

const vazir = localFont({
  src: "../fonts/Vazirmatn.ttf",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <head>
        <script src="//unpkg.com/react-scan/dist/auto.global.js" crossOrigin="anonymous" />
        <Analytics />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", vazir.className)}>
        <ThemeProvider enableSystem attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <ErrorBoundary>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
