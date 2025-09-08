import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";

import CopyRight from "../feature-parts/copyright-footer";
import Enamad from "../feature-parts/enamad";

export default function Footer() {
  return (
    <footer className="bg-muted/30 flex w-full flex-col border-t py-10">
      <div className="flex">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-6 md:grid-cols-5">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2">
              <Image
                height={60}
                width={60}
                alt="logo"
                className="ml-2 dark:invert"
                src="/hamgerd-logo.svg"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              پلتفرم جامع برگزاری و مدیریت رویدادهای آموزشی، علمی و تجاری
            </p>
            <div className="flex justify-center gap-6">
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="https://t.me/hamgerd_ir"
              >
                <FaTelegram className="h-5 w-5" />
                <span className="sr-only">تلگرام</span>
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="https://github.com/hamgerd"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">گیت هاب</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/events">
                  رویدادها
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/organizations">
                  سازمان‌ها
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/about">
                  درباره ما
                </Link>
              </li>
              <li></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">خدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/new-event">
                  ایجاد رویداد
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/new-organization"
                >
                  ثبت سازمان
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/dashboard/tickets"
                >
                  داشبورد کاربری
                </Link>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>ارومیه، میدان ولایت فقیه، خ مطهری، کوچه گمرک</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:09964066461">09964066461</a>
              </li>
              <li className="text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@hamgerd.ir</span>
              </li>
            </ul>
          </div>
          <Enamad />
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t px-6 pt-8">
        <CopyRight />
      </div>
    </footer>
  );
}
