"use client";

import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    } else {
      setAuthorized(true);
    }
  }, []);

  if (authorized === null) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  );
}
