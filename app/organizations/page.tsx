import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function OrganizationsPage() {
  // Mock organizations data
  const organizations = [
    {
      id: 1,
      name: "انجمن برنامه‌نویسان ایران",
      description:
        "انجمن برنامه‌نویسان ایران یک سازمان غیرانتفاعی است که با هدف توسعه دانش برنامه‌نویسی و فناوری‌های مرتبط در ایران فعالیت می‌کند.",
      logo: "/placeholder.svg?height=200&width=200",
      location: "تهران",
      eventCount: 12,
      memberCount: 1500,
      category: "فناوری",
      verified: true,
    },
    {
      id: 2,
      name: "موسسه آموزشی نوآوران",
      description: "موسسه آموزشی نوآوران با هدف ارائه آموزش‌های کاربردی و تخصصی در حوزه‌های مختلف فعالیت می‌کند.",
      logo: "/placeholder.svg?height=200&width=200",
      location: "اصفهان",
      eventCount: 8,
      memberCount: 800,
      category: "آموزشی",
      verified: true,
    },
    {
      id: 3,
      name: "انجمن مدیران کسب و کار",
      description: "انجمن مدیران کسب و کار با هدف توسعه مهارت‌های مدیریتی و کارآفرینی در ایران فعالیت می‌کند.",
      logo: "/placeholder.svg?height=200&width=200",
      location: "مشهد",
      eventCount: 15,
      memberCount: 1200,
      category: "کسب و کار",
      verified: false,
    },
    {
      id: 4,
      name: "گروه طراحان خلاق",
      description:
        "گروه طراحان خلاق متشکل از طراحان و هنرمندان حرفه‌ای است که در زمینه طراحی گرافیک و تجربه کاربری فعالیت می‌کنند.",
      logo: "/placeholder.svg?height=200&width=200",
      location: "شیراز",
      eventCount: 6,
      memberCount: 500,
      category: "طراحی",
      verified: true,
    },
    {
      id: 5,
      name: "انجمن بازاریابی دیجیتال",
      description: "انجمن بازاریابی دیجیتال با هدف توسعه دانش و مهارت‌های بازاریابی دیجیتال در ایران فعالیت می‌کند.",
      logo: "/placeholder.svg?height=200&width=200",
      location: "تهران",
      eventCount: 10,
      memberCount: 900,
      category: "بازاریابی",
      verified: true,
    },
    {
      id: 6,
      name: "مرکز نوآوری و کارآفرینی",
      description: "مرکز نوآوری و کارآفرینی با هدف حمایت از استارتاپ‌ها و ایده‌های نوآورانه فعالیت می‌کند.",
      logo: "/placeholder.svg?height=200&width=200",
      location: "تبریز",
      eventCount: 7,
      memberCount: 600,
      category: "کارآفرینی",
      verified: false,
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center gap-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">سازمان‌ها</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          با سازمان‌های برگزارکننده رویدادها آشنا شوید و در رویدادهای آن‌ها شرکت کنید
        </p>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <div className="md:col-span-2 relative">
          <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="جستجوی سازمان..." className="pr-10" />
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="دسته‌بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">همه</SelectItem>
              <SelectItem value="technology">فناوری</SelectItem>
              <SelectItem value="business">کسب و کار</SelectItem>
              <SelectItem value="education">آموزشی</SelectItem>
              <SelectItem value="design">طراحی</SelectItem>
              <SelectItem value="marketing">بازاریابی</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">جدیدترین</SelectItem>
              <SelectItem value="popular">محبوب‌ترین</SelectItem>
              <SelectItem value="mostEvents">بیشترین رویداد</SelectItem>
              <SelectItem value="mostMembers">بیشترین اعضا</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Organizations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {organizations.map((org) => (
          <Card key={org.id} className="overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 bg-muted">
                <Image src={org.logo || "/placeholder.svg"} alt={org.name} fill className="object-cover" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-xl text-center">{org.name}</h3>
                {org.verified && (
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    تایید شده
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="h-4 w-4" />
                <span>{org.location}</span>
              </div>
              <p className="text-muted-foreground text-sm text-center line-clamp-2 mb-4">{org.description}</p>
              <div className="flex justify-between w-full mb-4">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{org.eventCount} رویداد</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Users className="h-4 w-4" />
                  <span>{org.memberCount.toLocaleString("fa-IR")} عضو</span>
                </div>
              </div>
            </div>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/organizations/${org.id}`}>
                  مشاهده پروفایل
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center my-8">
        <div className="flex space-x-1 space-x-reverse">
          <Button variant="outline" size="icon">
            <span className="sr-only">صفحه قبل</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm">
            ۱
          </Button>
          <Button variant="outline" size="sm" className="bg-muted">
            ۲
          </Button>
          <Button variant="outline" size="sm">
            ۳
          </Button>
          <Button variant="outline" size="icon">
            <span className="sr-only">صفحه بعد</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 text-center mt-12 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold">می‌خواهید سازمان خود را ثبت کنید؟</h2>
        <p className="text-muted-foreground">به سادگی می‌توانید سازمان خود را ثبت کرده و رویدادهای خود را مدیریت کنید</p>
        <Button asChild size="lg" className="mt-2">
          <Link href="/new-organization">ثبت سازمان جدید</Link>
        </Button>
      </div>
    </div>
  )
}
