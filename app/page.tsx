import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CalendarDays, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  // Mock event data
  const featuredEvents = [
    {
      id: 1,
      title: "کنفرانس فناوری‌های نوین وب",
      date: "۱۵ مرداد ۱۴۰۲",
      location: "تهران، سالن همایش‌های برج میلاد",
      attendees: 250,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "کارگاه آموزشی هوش مصنوعی",
      date: "۲۰ مرداد ۱۴۰۲",
      location: "اصفهان، دانشگاه صنعتی",
      attendees: 120,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "سمینار کسب‌وکارهای نوپا",
      date: "۵ شهریور ۱۴۰۲",
      location: "مشهد، مرکز همایش‌های بین‌المللی",
      attendees: 180,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              رویدادهای فارسی را بسازید، مدیریت کنید و در آن‌ها شرکت کنید
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              پلتفرم جامع برگزاری و مدیریت رویدادهای آموزشی، علمی و تجاری
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg">
                <Link href="/events">مشاهده رویدادها</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/new-event">ایجاد رویداد جدید</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">رویدادهای برتر</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              جدیدترین و محبوب‌ترین رویدادهای در حال برگزاری
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} شرکت‌کننده</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/events/${event.id}`}>
                      مشاهده جزئیات
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline">
              <Link href="/events">مشاهده تمام رویدادها</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ویژگی‌های پلتفرم</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">ابزارهای قدرتمند برای مدیریت رویدادهای شما</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <CalendarDays className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">مدیریت رویدادها</h3>
              <p className="text-muted-foreground">ایجاد، برنامه‌ریزی و مدیریت رویدادهای مختلف با ابزارهای پیشرفته</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">مدیریت شرکت‌کنندگان</h3>
              <p className="text-muted-foreground">ثبت‌نام، تایید و مدیریت شرکت‌کنندگان در رویدادهای مختلف</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">مدیریت مکان‌ها</h3>
              <p className="text-muted-foreground">انتخاب و مدیریت مکان‌های برگزاری رویدادها با امکانات مختلف</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">همین امروز شروع کنید</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              در چند دقیقه ثبت‌نام کنید و اولین رویداد خود را ایجاد کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg">
                <Link href="/signup">ثبت‌نام رایگان</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">درباره ما</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
