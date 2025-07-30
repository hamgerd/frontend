import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const myEvents = [
  {
    id: 1,
    name: "کنسرت محمدرضا گلزار",
    date: "1403/09/15",
    time: "20:00",
    venue: "سالن میلاد نمایشگاه",
    attendees: 1250,
    capacity: 1500,
    status: "فعال",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "نمایش شب یلدا",
    date: "1403/09/30",
    time: "19:30",
    venue: "تئاتر شهر",
    attendees: 180,
    capacity: 200,
    status: "فعال",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "سمینار کسب و کار",
    date: "1403/08/20",
    time: "14:00",
    venue: "هتل اسپیناس",
    attendees: 95,
    capacity: 100,
    status: "تمام شده",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function MyEventsPage() {
  const activeEvents = myEvents.filter(event => event.status === "فعال").length;
  const totalAttendees = myEvents.reduce((sum, event) => sum + event.attendees, 0);

  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="رویدادهای من" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">کل رویدادها</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{myEvents.length}</div>
                    <p className="text-xs text-muted-foreground">رویداد برگزار شده</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">رویدادهای فعال</CardTitle>
                    <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{activeEvents}</div>
                    <p className="text-xs text-muted-foreground">در حال فروش</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">کل شرکت‌کنندگان</CardTitle>
                    <UsersIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {totalAttendees.toLocaleString("fa-IR")}
                    </div>
                    <p className="text-xs text-muted-foreground">نفر</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">میانگین فروش</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">%85</div>
                    <p className="text-xs text-muted-foreground">ظرفیت فروخته شده</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myEvents.map(event => (
                  <Card className="overflow-hidden" key={event.id}>
                    <div className="aspect-video relative">
                      <Image
                        height={10}
                        width={10}
                        alt={event.name}
                        className="object-cover w-full h-full"
                        src={event.image || "/placeholder.svg"}
                      />
                      <Badge
                        className="absolute top-2 right-2"
                        variant={event.status === "فعال" ? "default" : "secondary"}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.name}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {event.date} - {event.time}
                        </span>
                      </CardDescription>
                      <CardDescription className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        {event.venue}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>شرکت‌کنندگان:</span>
                          <span className="font-medium">
                            {event.attendees.toLocaleString("fa-IR")} /{" "}
                            {event.capacity.toLocaleString("fa-IR")}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            مدیریت
                          </Button>
                          <Button size="sm" className="flex-1" variant="outline">
                            آمار
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>عملکرد رویدادها</CardTitle>
                  <CardDescription>آمار فروش و شرکت‌کنندگان</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myEvents.map(event => (
                      <div
                        className="flex items-center justify-between p-4 border rounded-lg"
                        key={event.id}
                      >
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <Image
                            height={10}
                            width={10}
                            alt={event.name}
                            className="w-12 h-12 rounded-lg object-cover"
                            src={event.image || "/placeholder.svg"}
                          />
                          <div>
                            <h4 className="font-medium">{event.name}</h4>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="font-medium">
                            {Math.round((event.attendees / event.capacity) * 100)}% فروش
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {event.attendees.toLocaleString("fa-IR")} شرکت‌کننده
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
