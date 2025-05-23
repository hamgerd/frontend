import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, CalendarDays, Clock, Globe, Mail, MapPin, Share2, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This is a mock page component with hard-coded data for demonstration
export default function EventPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the event data based on params.id
  const event = {
    id: params.id,
    title: "کنفرانس فناوری‌های نوین وب",
    description:
      "کنفرانس فناوری‌های نوین وب یک رویداد تخصصی برای علاقه‌مندان به فناوری‌های وب است. در این کنفرانس، سخنرانان برجسته از آخرین پیشرفت‌ها و نوآوری‌های حوزه وب صحبت خواهند کرد.",
    longDescription:
      "کنفرانس فناوری‌های نوین وب یک رویداد تخصصی برای علاقه‌مندان به فناوری‌های وب است. در این کنفرانس، سخنرانان برجسته از آخرین پیشرفت‌ها و نوآوری‌های حوزه وب صحبت خواهند کرد. این کنفرانس فرصتی برای یادگیری، شبکه‌سازی و آشنایی با متخصصان این حوزه است. شرکت‌کنندگان می‌توانند در کارگاه‌های آموزشی، پنل‌های تخصصی و جلسات پرسش و پاسخ شرکت کنند. موضوعات اصلی کنفرانس شامل: فریم‌ورک‌های جدید وب، امنیت وب، پرفورمنس و بهینه‌سازی، هوش مصنوعی در وب و آینده فناوری‌های وب می‌باشد.",
    date: "۱۵ مرداد ۱۴۰۲",
    startTime: "۰۹:۰۰",
    endTime: "۱۷:۰۰",
    location: "تهران، سالن همایش‌های برج میلاد",
    address: "تهران، بزرگراه شهید همت، برج میلاد، سالن همایش‌های اصلی",
    price: "۵۰۰,۰۰۰ تومان",
    capacity: 300,
    attendees: 250,
    image: "/placeholder.svg?height=400&width=800",
    category: "فناوری",
    organizer: {
      id: 1,
      name: "انجمن برنامه‌نویسان ایران",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "انجمن برنامه‌نویسان ایران یک سازمان غیرانتفاعی است که با هدف توسعه دانش برنامه‌نویسی و فناوری‌های مرتبط در ایران فعالیت می‌کند.",
      email: "info@iranprogrammers.org",
      website: "www.iranprogrammers.org",
    },
    speakers: [
      {
        id: 1,
        name: "علی محمدی",
        role: "مدیر فنی شرکت فناوران",
        image: "/placeholder.svg?height=100&width=100",
        topic: "آینده فریم‌ورک‌های وب",
        time: "۱۰:۰۰ - ۱۱:۰۰",
      },
      {
        id: 2,
        name: "سارا احمدی",
        role: "متخصص امنیت وب",
        image: "/placeholder.svg?height=100&width=100",
        topic: "امنیت در اپلیکیشن‌های وب مدرن",
        time: "۱۱:۰۰ - ۱۲:۰۰",
      },
      {
        id: 3,
        name: "محمد رضایی",
        role: "مهندس ارشد فرانت‌اند",
        image: "/placeholder.svg?height=100&width=100",
        topic: "بهینه‌سازی پرفورمنس در برنامه‌های وب",
        time: "۱۳:۰۰ - ۱۴:۰۰",
      },
    ],
    schedule: [
      {
        time: "۰۹:۰۰ - ۰۹:۳۰",
        title: "پذیرش و ثبت‌نام",
        description: "خوش‌آمدگویی و ثبت‌نام شرکت‌کنندگان",
      },
      {
        time: "۰۹:۳۰ - ۱۰:۰۰",
        title: "افتتاحیه",
        description: "سخنرانی افتتاحیه و معرفی برنامه کنفرانس",
      },
      {
        time: "۱۰:۰۰ - ۱۱:۰۰",
        title: "آینده فریم‌ورک‌های وب",
        description: "سخنرانی علی محمدی درباره روندهای آینده فریم‌ورک‌های وب",
        speaker: "علی محمدی",
      },
      {
        time: "۱۱:۰۰ - ۱۲:۰۰",
        title: "امنیت در اپلیکیشن‌های وب مدرن",
        description: "سخنرانی سارا احمدی درباره چالش‌های امنیتی وب مدرن",
        speaker: "سارا احمدی",
      },
      {
        time: "۱۲:۰۰ - ۱۳:۰۰",
        title: "استراحت و ناهار",
        description: "صرف ناهار و استراحت",
      },
      {
        time: "۱۳:۰۰ - ۱۴:۰۰",
        title: "بهینه‌سازی پرفورمنس در برنامه‌های وب",
        description: "سخنرانی محمد رضایی درباره تکنیک‌های بهینه‌سازی عملکرد",
        speaker: "محمد رضایی",
      },
      {
        time: "۱۴:۰۰ - ۱۵:۰۰",
        title: "پنل تخصصی",
        description: "پنل تخصصی با حضور سخنرانان و پرسش و پاسخ",
      },
      {
        time: "۱۵:۰۰ - ۱۷:۰۰",
        title: "کارگاه عملی",
        description: "کارگاه عملی پیاده‌سازی یک اپلیکیشن وب مدرن",
      },
    ],
  }

  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/events">
            <ArrowLeft className="mr-2 h-4 w-4" />
            بازگشت به رویدادها
          </Link>
        </Button>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            اشتراک‌گذاری
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden mb-6">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md">
              {event.category}
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-5 w-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>
                {event.startTime} تا {event.endTime}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>
                {event.attendees} از {event.capacity} شرکت‌کننده
              </span>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">درباره</TabsTrigger>
              <TabsTrigger value="schedule">برنامه زمانی</TabsTrigger>
              <TabsTrigger value="speakers">سخنرانان</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <p className="mb-6 whitespace-pre-line">{event.longDescription}</p>

              <h3 className="text-lg font-bold mb-2">محل برگزاری</h3>
              <p className="mb-6">{event.address}</p>

              <div className="rounded-lg overflow-hidden h-64 bg-muted">
                {/* Google Map would go here in a real application */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  نقشه محل برگزاری
                </div>
              </div>
            </TabsContent>
            <TabsContent value="schedule" className="mt-6">
              <div className="space-y-6">
                {event.schedule.map((item, index) => (
                  <div key={index} className="relative pr-10 pb-6 border-r">
                    <div className="absolute right-[-8px] top-2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="mb-1 font-medium">{item.time}</div>
                    <div className="font-bold text-lg mb-1">{item.title}</div>
                    <div className="text-muted-foreground">{item.description}</div>
                    {item.speaker && (
                      <Badge variant="outline" className="mt-2">
                        <User className="mr-1 h-3 w-3" />
                        {item.speaker}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="speakers" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {event.speakers.map((speaker) => (
                  <Card key={speaker.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                          <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-bold">{speaker.name}</h3>
                          <p className="text-sm text-muted-foreground">{speaker.role}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{speaker.topic}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{speaker.time}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>ثبت‌نام در رویداد</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between py-2">
                <span className="font-medium">قیمت:</span>
                <span>{event.price}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium">ظرفیت باقیمانده:</span>
                <span>{event.capacity - event.attendees} نفر</span>
              </div>
              <Button className="w-full" size="lg">
                ثبت‌نام در رویداد
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>برگزارکننده</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={event.organizer.image || "/placeholder.svg"} alt={event.organizer.name} />
                  <AvatarFallback>{event.organizer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{event.organizer.name}</h3>
                  <Link href={`/organizations/${event.organizer.id}`} className="text-sm text-primary hover:underline">
                    مشاهده پروفایل
                  </Link>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{event.organizer.description}</p>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{event.organizer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{event.organizer.website}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
