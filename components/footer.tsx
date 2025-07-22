import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t py-10 bg-muted/30 w-full flex flex-col ">
      <div className="flex">
        <div className="container grid grid-cols-1 md:grid-cols-5 gap-10 px-6 mx-auto">
          <div className="space-y-4 flex justify-center flex-col">
            <div className="flex items-center gap-2">
              <Image
                src={"/hamgerd-logo.svg"}
                alt="logo"
                width={60}
                height={60}
                className="ml-2 dark:invert"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              پلتفرم جامع برگزاری و مدیریت رویدادهای آموزشی، علمی و تجاری
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="https://t.me/hamgerd_ir"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaTelegram className="h-5 w-5" />
                <span className="sr-only">تلگرام</span>
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
              <li></li>
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
                <Link
                  href="/new-organization"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ثبت سازمان
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/tickets"
                  className="text-muted-foreground hover:text-foreground"
                >
                  داشبورد کاربری
                </Link>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>ارومیه، میدان ولایت فقیه، خ مطهری، کوچه گمرک</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:09964066461">09964066461</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@hamgerd.ir</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=615587&Code=Qw0Ofji05K3rhWG4GTTm5LZMuLYnr6wB"
            >
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=615587&Code=Qw0Ofji05K3rhWG4GTTm5LZMuLYnr6wB"
                alt=""
                code="Qw0Ofji05K3rhWG4GTTm5LZMuLYnr6wB"
                className="h-20 w-20"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t px-6  mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            <span className="flex items-center gap-1 text-sm" dir="ltr">
              <a href="https://hamgerd.ir" className="hover:underline">
                هم‌گرد
              </a>
              © 2025
              <span className="mx-1">licensed under</span>
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                className="flex items-center hover:underline"
              >
                CC BY-SA 4.0
                <Image
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
                  width={16}
                  height={16}
                  className="inline-block mx-0.5"
                  alt="CC"
                />
                <Image
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
                  width={16}
                  height={16}
                  className="inline-block mx-0.5"
                  alt="BY"
                />
                <Image
                  src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
                  width={16}
                  height={16}
                  className="inline-block mx-0.5"
                  alt="SA"
                />
              </a>
            </span>
          </p>
          <div className="flex gap-6">
            <Link
              href="/tos"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              شرایط استفاده
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              حریم خصوصی
            </Link>
            <Link
              href="/faq"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              سوالات متداول
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
