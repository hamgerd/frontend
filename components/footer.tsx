import Link from "next/link"
import { CalendarDays, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-6 w-6" />
            <span className="font-bold text-xl">رویداد فارسی</span>
          </div>
          <p className="text-sm text-muted-foreground">پلتفرم جامع برگزاری و مدیریت رویدادهای آموزشی، علمی و تجاری</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">فیسبوک</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">توییتر</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">اینستاگرام</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">لینکدین</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">دسترسی سریع</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-muted-foreground hover:text-foreground">
                رویدادها
              </Link>
            </li>
            <li>
              <Link href="/organizations" className="text-muted-foreground hover:text-foreground">
                سازمان‌ها
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">خدمات</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/new-event" className="text-muted-foreground hover:text-foreground">
                ایجاد رویداد
              </Link>
            </li>
            <li>
              <Link href="/new-organization" className="text-muted-foreground hover:text-foreground">
                ثبت سازمان
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                داشبورد کاربری
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-muted-foreground hover:text-foreground">
                راهنما و پشتیبانی
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                وبلاگ
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">تماس با ما</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>تهران، خیابان ولیعصر، برج رویداد، طبقه ۵</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0" />
              <span>۰۲۱-۸۸۸۸۸۸۸۸</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0" />
              <span>info@eventfarsi.ir</span>
            </li>
          </ul>
          <Button className="w-full" variant="outline">
            <Link href="/contact">ارسال پیام</Link>
          </Button>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} رویداد فارسی. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              قوانین و مقررات
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              حریم خصوصی
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              سوالات متداول
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
