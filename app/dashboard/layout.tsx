"use client";

import React, { useEffect } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";

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
    <div className="bg-background fixed inset-0 z-50 overflow-y-auto">
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  );
}
