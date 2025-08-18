import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function CreditPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="w-full max-w-full overflow-x-hidden">
        <SiteHeader title="" />
      </SidebarInset>
    </SidebarProvider>
  );
}
