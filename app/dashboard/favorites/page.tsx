import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, CalendarIcon, TicketIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const favoriteEvents = [
  {
    id: 1,
    name: "کنسرت محسن چاوشی",
    date: "1403/11/15",
    time: "20:30",
    venue: "کاخ نیاوران",
    price: "800000",
    image: "/placeholder.svg?height=200&width=300",
    category: "موسیقی",
    rating: 4.8,
  },
  {
    id: 2,
    name: "استندآپ کمدی حسن ریوندی",
    date: "1403/10/30",
    time: "21:00",
    venue: "تالار وحدت",
    price: "250000",
    image: "/placeholder.svg?height=200&width=300",
    category: "کمدی",
    rating: 4.6,
  },
  {
    id: 3,
    name: "نمایش موزیکال آلادین",
    date: "1403/11/05",
    time: "19:00",
    venue: "تئاتر شهر",
    price: "400000",
    image: "/placeholder.svg?height=200&width=300",
    category: "موزیکال",
    rating: 4.9,
  },
];

const favoriteArtists = [
  { id: 1, name: "محمدرضا گلزار", category: "بازیگر", followers: "2.3M" },
  { id: 2, name: "حمید هیراد", category: "خواننده", followers: "1.8M" },
  { id: 3, name: "پرویز پرستویی", category: "بازیگر", followers: "1.2M" },
  { id: 4, name: "محسن چاوشی", category: "خواننده", followers: "3.1M" },
];

export default function FavoritesPage() {
  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="علاقه‌مندی‌های من" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">رویدادهای مورد علاقه</CardTitle>
                    <HeartIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{favoriteEvents.length}</div>
                    <p className="text-xs text-muted-foreground">رویداد</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">هنرمندان مورد علاقه</CardTitle>
                    <StarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{favoriteArtists.length}</div>
                    <p className="text-xs text-muted-foreground">هنرمند</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">دسته‌های مورد علاقه</CardTitle>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۵</div>
                    <p className="text-xs text-muted-foreground">دسته‌بندی</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">اعلان‌های فعال</CardTitle>
                    <TicketIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۱۲</div>
                    <p className="text-xs text-muted-foreground">اعلان</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>رویدادهای مورد علاقه</CardTitle>
                    <CardDescription>رویدادهایی که دنبال می‌کنید</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {favoriteEvents.map(event => (
                      <div key={event.id} className="flex items-center space-x-4 space-x-reverse">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.name}
                          className="w-16 h-16 rounded-lg object-cover"
                          height={10}
                          width={10}
                        />
                        <div className="flex-1 space-y-1">
                          <h4 className="text-sm font-medium">{event.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {event.date} - {event.venue}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{event.category}</Badge>
                            <div className="flex items-center gap-1">
                              <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{event.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm">خرید</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>هنرمندان مورد علاقه</CardTitle>
                    <CardDescription>هنرمندانی که دنبال می‌کنید</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {favoriteArtists.map(artist => (
                      <div key={artist.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {artist.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">{artist.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {artist.category} • {artist.followers} دنبال‌کننده
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <HeartIcon className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
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
