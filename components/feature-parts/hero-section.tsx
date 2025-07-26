import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            هم‌گرد، جایی برای ساختن و مدیریت رویدادهایی که به‌یاد می‌مانند.
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
  );
}
