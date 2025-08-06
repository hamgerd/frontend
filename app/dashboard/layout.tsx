"use client";

import React, { useEffect } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AuthProvider, useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  }, [isAuthenticated]);

  if (isAuthenticated === false) {
    return null;
  }
  return (
    <div className="bg-background fixed inset-0 z-50 overflow-y-auto">
      <AuthProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </AuthProvider>
    </div>
  );
}
