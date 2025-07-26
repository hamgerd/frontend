import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookmarkIcon, CalendarIcon, MapPinIcon, TicketIcon } from "lucide-react";
import Image from "next/image";

const bookmarkedEvents = [
  {
    id: 1,
    name: "کنسرت حمید هیراد",
    date: "1403/10/20",
    time: "20:00",
    venue: "سالن میلاد نمایشگاه",
    price: "450000",
    image: "/placeholder.svg?height=200&width=300",
    category: "موسیقی",
  },
  {
    id: 2,
    name: "نمایش کمدی شب‌های تهران",
    date: "1403/10/25",
    time: "19:30",
    venue: "تئاتر شهر",
    price: "180000",
    image: "/placeholder.svg?height=200&width=300",
    category: "تئاتر",
  },
  {
    id: 3,
    name: "سمینار دیجیتال مارکتینگ",
    date: "1403/11/01",
    time: "14:00",
    venue: "هتل اسپیناس",
    price: "350000",
    image: "/placeholder.svg?height=200&width=300",
    category: "آموزشی",
  },
  {
    id: 4,
    name: "نمایشگاه عکس معاصر",
    date: "1403/11/10",
    time: "10:00",
    venue: "گالری ایرانشهر",
    price: "50000",
    image: "/placeholder.svg?height=200&width=300",
    category: "هنری",
  },
];

export default function BookmarksPage() {
  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="رویدادهای نشان‌شده" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">کل نشان‌شده‌ها</CardTitle>
                    <BookmarkIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{bookmarkedEvents.length}</div>
                    <p className="text-xs text-muted-foreground">رویداد نشان‌شده</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">دسته‌بندی‌ها</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۴</div>
                    <p className="text-xs text-muted-foreground">دسته مختلف</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">میانگین قیمت</CardTitle>
                    <TicketIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۲۵۷,۵۰۰</div>
                    <p className="text-xs text-muted-foreground">تومان</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">نزدیک‌ترین رویداد</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۱۵</div>
                    <p className="text-xs text-muted-foreground">روز دیگر</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bookmarkedEvents.map(event => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        className="object-cover w-full h-full"
                        width={300}
                        height={300}
                      />
                      <Badge className="absolute top-2 right-2">{event.category}</Badge>
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
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">
                          {Number.parseInt(event.price).toLocaleString("fa-IR")} تومان
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">خرید بلیط</Button>
                          <Button size="sm" variant="outline">
                            <BookmarkIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
