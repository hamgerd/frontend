import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, MapPinIcon, TicketIcon } from "lucide-react";

const calendarEvents = [
  {
    id: 1,
    name: "کنسرت محمدرضا گلزار",
    date: "1403/09/15",
    time: "20:00",
    venue: "سالن میلاد نمایشگاه",
    status: "تایید شده",
    type: "کنسرت",
  },
  {
    id: 2,
    name: "نمایش شب یلدا",
    date: "1403/09/30",
    time: "19:30",
    venue: "تئاتر شهر",
    status: "تایید شده",
    type: "تئاتر",
  },
  {
    id: 3,
    name: "سمینار کسب و کار",
    date: "1403/10/05",
    time: "14:00",
    venue: "هتل اسپیناس",
    status: "در انتظار",
    type: "آموزشی",
  },
  {
    id: 4,
    name: "جشنواره فیلم فجر",
    date: "1403/11/20",
    time: "18:00",
    venue: "سینما آزادی",
    status: "تایید شده",
    type: "سینما",
  },
];

const upcomingEvents = [
  { date: "15", month: "آذر", day: "جمعه", events: 2 },
  { date: "20", month: "آذر", day: "چهارشنبه", events: 1 },
  { date: "25", month: "آذر", day: "دوشنبه", events: 3 },
  { date: "30", month: "آذر", day: "شنبه", events: 1 },
];

export default function CalendarPage() {
  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="تقویم من" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">رویدادهای این ماه</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۷</div>
                    <p className="text-xs text-muted-foreground">رویداد برنامه‌ریزی شده</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">رویدادهای آینده</CardTitle>
                    <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۴</div>
                    <p className="text-xs text-muted-foreground">در ۳۰ روز آینده</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">بلیط‌های خریداری شده</CardTitle>
                    <TicketIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۳</div>
                    <p className="text-xs text-muted-foreground">بلیط فعال</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">یادآوری‌ها</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۵</div>
                    <p className="text-xs text-muted-foreground">یادآوری فعال</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>رویدادهای برنامه‌ریزی شده</CardTitle>
                      <CardDescription>لیست کامل رویدادهای شما</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {calendarEvents.map(event => (
                        <div
                          key={event.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="space-y-2">
                            <h4 className="font-medium">{event.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <CalendarIcon className="h-4 w-4" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <ClockIcon className="h-4 w-4" />
                                {event.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPinIcon className="h-4 w-4" />
                                {event.venue}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{event.type}</Badge>
                              <Badge
                                variant={event.status === "تایید شده" ? "default" : "secondary"}
                              >
                                {event.status}
                              </Badge>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            جزئیات
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>تاریخ‌های مهم</CardTitle>
                    <CardDescription>رویدادهای آینده</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <div className="text-center">
                            <div className="text-2xl font-bold">{event.date}</div>
                            <div className="text-xs text-muted-foreground">{event.month}</div>
                          </div>
                          <div>
                            <div className="font-medium">{event.day}</div>
                            <div className="text-sm text-muted-foreground">
                              {event.events} رویداد
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{event.events}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
