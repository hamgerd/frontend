"use client";

import { CalendarIcon, MapPinIcon, TicketIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { DataTable } from "@/components/dashboard/data-table";
import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import api from "@/lib/axios";

interface TicketType {
  public_id: string;
  title: string;
  description: string;
  price: number;
  max_participants: number;
}
interface Tickets {
  event: any;
  public_id: string;
  created_at: string;
  updated_at: string;
  notes: string;
  status: string;
  ticket_number: number;
  ticket_type: TicketType;
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Tickets[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/api/v1/events/tickets/me/");
        setTickets(res.data.results);
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
  const totalValue = tickets.reduce((sum, t) => {
    if (t.status === "s") {
      return sum + Number(t.ticket_type?.price || 0);
    }
    return sum;
  }, 0);

  return (
    <div dir="rtl" className="dark w-full max-w-full overflow-x-hidden font-sans">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset className="w-full max-w-full overflow-x-hidden">
          <SiteHeader title="اطلاعات بلیط " />
          <div className="flex w-full max-w-full flex-1 flex-col overflow-x-hidden">
            <div className="flex w-full max-w-full flex-1 flex-col gap-4 overflow-x-hidden p-4 md:p-6">
              {loading ? (
                <div>در حال بارگذاری...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                <div className="w-full max-w-full space-y-4 overflow-x-hidden">
                  <div className="w-full max-w-full overflow-x-hidden">
                    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="truncate text-sm font-medium">کل بلیت‌ها</CardTitle>
                          <TicketIcon className="text-muted-foreground h-4 w-4 shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {totalTickets.toLocaleString("fa-IR")}
                          </div>
                          <p className="text-muted-foreground text-xs">
                            {activeTickets.toLocaleString("fa-IR")} بلیت فعال
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="truncate text-sm font-medium">
                            رویدادهای آینده
                          </CardTitle>
                          <CalendarIcon className="text-muted-foreground h-4 w-4 shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {futureEvents.toLocaleString("fa-IR")}
                          </div>
                          <p className="text-muted-foreground text-xs">در آینده</p>
                        </CardContent>
                      </Card>

                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="truncate text-sm font-medium">
                            مکان‌های مختلف
                          </CardTitle>
                          <MapPinIcon className="text-muted-foreground h-4 w-4 shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {uniqueLocations.toLocaleString("fa-IR")}
                          </div>
                          <p className="text-muted-foreground text-xs">مکان‌های متفاوت</p>
                        </CardContent>
                      </Card>

                      <Card className="min-w-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="truncate text-sm font-medium">ارزش کل</CardTitle>
                          <TicketIcon className="text-muted-foreground h-4 w-4 shrink-0" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {totalValue.toLocaleString("fa-IR", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </div>
                          <p className="text-muted-foreground text-xs">تومان</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="w-full max-w-full overflow-x-auto">
                    <div className="m-5 text-2xl font-bold"> بلیت های من</div>
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
