import Link from "next/link"
import { ArrowRight, CalendarDays, ListChecks, Settings, Star, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  // Mock data for dashboard
  const upcomingEvents = [
    {
      id: 1,
      title: "کنفرانس فناوری‌های نوین وب",
      date: "۱۵ مرداد ۱۴۰۲",
      location: "تهران، سالن همایش‌های برج میلاد",
      attendees: 250,
      status: "تایید شده",
    },
    {
      id: 2,
      title: "کارگاه آموزشی هوش مصنوعی",
      date: "۲۰ مرداد ۱۴۰۲",
      location: "اصفهان، دانشگاه صنعتی",
      attendees: 120,
      status: "در انتظار تایید",
    },
  ]

  const myEvents = [
    {
      id: 1,
      title: "سمینار مدیریت پروژه",
      date: "۱۰ شهریور ۱۴۰۲",
      location: "آنلاین",
      registrations: 85,
      capacity: 150,
      status: "فعال",
    },
    {
      id: 2,
      title: "کارگاه برنامه‌نویسی موبایل",
      date: "۲۵ شهریور ۱۴۰۲",
      location: "تهران، مرکز نوآوری",
      registrations: 40,
      capacity: 50,
      status: "فعال",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "تایید ثبت‌نام",
      message: "ثبت‌نام شما در رویداد 'کنفرانس فناوری‌های نوین وب' تایید شد.",
      time: "۲ ساعت پیش",
    },
    {
      id: 2,
      title: "یادآوری رویداد",
      message: "رویداد 'کنفرانس فناوری‌های نوین وب' فردا برگزار می‌شود.",
      time: "۵ ساعت پیش",
    },
    {
      id: 3,
      title: "پیام جدید",
      message: "شما یک پیام جدید از برگزارکننده رویداد دارید.",
      time: "۱ روز پیش",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">داشبورد</h1>
        <Button asChild variant="outline">
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            تنظیمات
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <CalendarDays className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">رویدادهای من</p>
                <p className="text-2xl font-bold">۲</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <ListChecks className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ثبت‌نام‌های من</p>
                <p className="text-2xl font-bold">۳</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">شرکت‌کنندگان</p>
                <p className="text-2xl font-bold">۱۲۵</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">امتیاز من</p>
                <p className="text-2xl font-bold">۴.۸</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="myEvents">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="myEvents">رویدادهای من</TabsTrigger>
          <TabsTrigger value="registered">ثبت‌نام‌های من</TabsTrigger>
          <TabsTrigger value="notifications">اعلان‌ها</TabsTrigger>
        </TabsList>
        <TabsContent value="myEvents">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge>{event.status}</Badge>
                  </div>
                  <CardDescription>
                    {event.date} - {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ثبت‌نام‌ها:</span>
                      <span>
                        {event.registrations} از {event.capacity}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/events/${event.id}/manage`}>
                      مدیریت رویداد
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-4">
                <CalendarDays className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">ایجاد رویداد جدید</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                رویداد جدیدی ایجاد کنید و آن را با شرکت‌کنندگان به اشتراک بگذارید
              </p>
              <Button asChild>
                <Link href="/new-event">ایجاد رویداد</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="registered">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant={event.status === "تایید شده" ? "default" : "outline"}>{event.status}</Badge>
                  </div>
                  <CardDescription>
                    {event.date} - {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} شرکت‌کننده</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline">
                    <Link href={`/events/${event.id}/ticket`}>مشاهده بلیت</Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/events/${event.id}`}>
                      جزئیات رویداد
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>اعلان‌های اخیر</CardTitle>
              <CardDescription>اعلان‌های مربوط به رویدادها و فعالیت‌های شما</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={notification.id}>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt="" />
                        <AvatarFallback>نت</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                    {index < notifications.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                مشاهده همه اعلان‌ها
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
