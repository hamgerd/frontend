import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  // Mock team data
  const team = [
    {
      name: "علی محمدی",
      role: "مدیرعامل",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "سارا احمدی",
      role: "مدیر فنی",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "محمد حسینی",
      role: "مدیر بازاریابی",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "مریم کریمی",
      role: "مدیر محصول",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="container py-10 mx-auto ">
      <div className="mx-5">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            درباره رویداد فارسی
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            داستان ما و ماموریت ما برای ساده‌سازی مدیریت رویدادها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                رویداد فارسی در سال ۱۴۰۰ با هدف ساده‌سازی فرآیند مدیریت رویدادها
                در ایران آغاز به کار کرد. ما متوجه شدیم که بسیاری از سازمان‌ها و
                افراد برای برگزاری رویدادها با چالش‌های متعددی روبرو هستند.
              </p>
              <p>
                تیم ما متشکل از متخصصان حوزه فناوری و رویدادها، با درک عمیق از
                نیازهای برگزارکنندگان و شرکت‌کنندگان، پلتفرمی جامع و کاربرپسند
                طراحی کرد که تمام جنبه‌های مدیریت رویداد را پوشش می‌دهد.
              </p>
              <p>
                امروز، رویداد فارسی به یکی از پیشتازان صنعت مدیریت رویداد در
                ایران تبدیل شده است و هزاران رویداد موفق از طریق پلتفرم ما
                برگزار شده است.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="تیم رویداد فارسی"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold">ماموریت ما</h2>
            <p className="max-w-[700px] text-muted-foreground">
              ما به دنبال ساده‌سازی و بهبود تجربه برگزاری و شرکت در رویدادها
              هستیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ساده‌سازی مدیریت</h3>
                  <p className="text-muted-foreground">
                    ما به دنبال ساده‌سازی فرآیند مدیریت رویدادها برای
                    برگزارکنندگان هستیم تا آن‌ها بتوانند بر محتوا و کیفیت
                    رویدادها تمرکز کنند.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    ارتقای تجربه کاربری
                  </h3>
                  <p className="text-muted-foreground">
                    ما به دنبال ارتقای تجربه شرکت‌کنندگان از طریق ارائه یک
                    پلتفرم ساده، کاربرپسند و امن برای ثبت‌نام و شرکت در رویدادها
                    هستیم.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">توسعه صنعت رویداد</h3>
                  <p className="text-muted-foreground">
                    ما به دنبال توسعه صنعت رویداد در ایران از طریق ارائه ابزارها
                    و منابع لازم برای برگزاری رویدادهای با کیفیت هستیم.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold">تیم ما</h2>
            <p className="max-w-[700px] text-muted-foreground">
              با تیم متخصص و باتجربه ما آشنا شوید
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-64 w-64 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">تماس با ما</h2>
            <p className="text-muted-foreground mb-6">
              اگر سوالی دارید یا به کمک نیاز دارید، لطفا با ما تماس بگیرید. تیم
              پشتیبانی ما آماده پاسخگویی به سوالات شما است.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>info@eventfarsi.ir</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>۰۲۱-۸۸۸۸۸۸۸۸</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <span>پشتیبانی آنلاین ۲۴/۷</span>
              </div>
            </div>
            <Button asChild className="mt-6">
              <Link href="/contact">
                تماس با ما
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">فرم تماس سریع</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  موضوع
                </label>
                <input
                  id="subject"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="موضوع پیام خود را وارد کنید"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  پیام
                </label>
                <textarea
                  id="message"
                  className="min-h-32 resize-none w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>
              <Button type="submit" className="w-full">
                ارسال پیام
              </Button>
            </form>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">آماده شروع هستید؟</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            همین امروز به رویداد فارسی بپیوندید و تجربه متفاوتی از مدیریت و شرکت
            در رویدادها داشته باشید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/signup">ثبت‌نام رایگان</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/events">مشاهده رویدادها</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
