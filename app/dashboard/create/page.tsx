import Link from "next/link";

import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function CreatePage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="w-full max-w-full overflow-x-hidden">
        <SiteHeader />
        <div className="container mx-auto mt-10 flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-center text-3xl font-bold">نحوه ایجاد سازمان و رویداد </h1>
            <div>
              <h2 className="mt-10 text-2xl font-bold">ایجاد سازمان</h2>
              <p className="m-3 flex text-lg">
                برای ساختن سازمان به لینک
                <Link className="text-primary mx-2" href="/new-organization">
                  اینجا
                </Link>
                مراجعه کنید و برای دیدن سازمان های خود به لینک
                <Link className="text-primary mx-2" href="/dashboard/organization">
                  اینجا
                </Link>
              </p>
            </div>
            <div>
              <h2 className="mt-10 mb-4 text-2xl font-bold">ایجاد رویداد</h2>
              <span className="mx-10 text-red-500 underline">
                توجه: برای ایجاد رویداد باید حتما باید سازمان ساخته شده داشته باشید{" "}
              </span>
              <p className="m-3 flex text-lg">
                برای ساختن رویداد به لینک
                <Link className="text-primary mx-2" href="/new-event">
                  اینجا
                </Link>
                مراجعه کنید و برای دیدن ایونت های خود به لینک
                <Link className="text-primary mx-2" href="/dashboard/events">
                  اینجا
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
