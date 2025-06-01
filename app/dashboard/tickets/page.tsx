import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TicketIcon, CalendarIcon, MapPinIcon } from "lucide-react"

import data from "../data.json"

export default function TicketsPage() {
  const ticketData = data.filter((item) => item.eventName)

  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="بلیت‌های من" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">کل بلیط‌ها</CardTitle>
                    <TicketIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۵</div>
                    <p className="text-xs text-muted-foreground">۳ بلیط فعال</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">رویدادهای آینده</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۳</div>
                    <p className="text-xs text-muted-foreground">در ۲ هفته آینده</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">مکان‌های مختلف</CardTitle>
                    <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۴</div>
                    <p className="text-xs text-muted-foreground">مکان‌های مختلف</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">ارزش کل</CardTitle>
                    <TicketIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۱,۲۳۰,۰۰۰</div>
                    <p className="text-xs text-muted-foreground">تومان</p>
                  </CardContent>
                </Card>
              </div>
              <DataTable data={ticketData} />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
