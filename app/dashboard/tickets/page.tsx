"use client";

import { CalendarIcon, MapPinIcon, TicketIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { DataTable } from "@/components/dashboard/data-table";
import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import api from "@/lib/axios";

interface Ticket {
  id: number;
  status: "c" | "e" | "p" | "s";
  created_at: string;
  ticket_type: {
    price: number;
    description: string;
  };
  event?: {
    start_time?: string;
  };
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/api/v1/events/tickets/me/");
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setTickets(data);
      } catch (_error) {
        setError("خطا در دریافت اطلاعات بلیت‌ها");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const totalTickets = tickets.length;
  const activeTickets = tickets.filter(t => t.status === "s").length;
  const futureEvents = tickets.filter(t => {
    const futureDate = t.event?.start_time ?? t.created_at; // fallback to created_at if no event
    return new Date(futureDate) > new Date();
  }).length;
  const uniqueLocations = new Set(tickets.map(t => t.ticket_type?.description || "")).size;
  const totalValue = tickets.reduce(
    (sum, t) => sum + ((t.status === "s" && t.ticket_type?.price) || 0),
    0
  );

  return (
    <div dir="rtl" className="font-sans dark w-full max-w-full overflow-x-hidden">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset className="w-full max-w-full overflow-x-hidden">
          <SiteHeader title="بلیت‌های من" />
          <div className="flex flex-1 flex-col w-full max-w-full overflow-x-hidden">
            <div className="flex flex-1 flex-col gap-4 p-4 w-full max-w-full overflow-x-hidden md:p-6">
              {loading ? (
                <div>در حال بارگذاری...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                <div className="w-full max-w-full overflow-x-hidden space-y-4">
                  <div className="w-full max-w-full overflow-x-hidden">
                    <div className="grid gap-4 w-full grid-cols-2 md:grid-cols-4">
                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium truncate">کل بلیت‌ها</CardTitle>
                          <TicketIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{totalTickets}</div>
                          <p className="text-xs text-muted-foreground">{activeTickets} بلیت فعال</p>
                        </CardContent>
                      </Card>

                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium truncate">
                            رویدادهای آینده
                          </CardTitle>
                          <CalendarIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{futureEvents}</div>
                          <p className="text-xs text-muted-foreground">در آینده</p>
                        </CardContent>
                      </Card>

                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium truncate">
                            مکان‌های مختلف
                          </CardTitle>
                          <MapPinIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{uniqueLocations}</div>
                          <p className="text-xs text-muted-foreground">مکان‌های متفاوت</p>
                        </CardContent>
                      </Card>

                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium truncate">ارزش کل</CardTitle>
                          <TicketIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {totalValue.toLocaleString("fa-IR")}
                          </div>
                          <p className="text-xs text-muted-foreground">تومان</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="w-full max-w-full overflow-x-auto">
                    <DataTable data={tickets} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
