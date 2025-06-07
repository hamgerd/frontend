"use client";

import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  );
}
