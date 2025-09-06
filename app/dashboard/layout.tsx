"use client";

import localFont from "next/font/local";
import React, { useEffect } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const vazir = localFont({
  src: "../../fonts/Vazirmatn.ttf",
  display: "swap",
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      const timeout = setTimeout(() => {
        window.location.href = "/login";
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isAuthenticated]);
  if (isAuthenticated === false) {
    return null;
  }
  return (
    <div className={cn("bg-background fixed inset-0 z-50 overflow-y-auto", vazir.className)}>
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  );
}
