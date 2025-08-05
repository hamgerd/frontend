"use client";

import React, { useEffect, useState } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

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
    <div className="bg-background fixed inset-0 z-50 overflow-y-auto">
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  );
}
