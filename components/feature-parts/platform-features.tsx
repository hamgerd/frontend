import { CalendarDays, MapPin, Users } from "lucide-react";

export default function PlatformFeatures() {
  return (
    <section className="bg-muted flex w-full items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ویژگی‌های پلتفرم
          </h2>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            ابزارهای قدرتمند برای مدیریت رویدادهای شما
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <CalendarDays className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-bold">مدیریت رویدادها</h3>
            <p className="text-muted-foreground">
              ایجاد، برنامه‌ریزی و مدیریت رویدادهای مختلف با ابزارهای پیشرفته
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-bold">مدیریت شرکت‌کنندگان</h3>
            <p className="text-muted-foreground">
              ثبت‌نام، تایید و مدیریت شرکت‌کنندگان در رویدادهای مختلف
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-bold">مدیریت مکان‌ها</h3>
            <p className="text-muted-foreground">
              انتخاب و مدیریت مکان‌های برگزاری رویدادها با امکانات مختلف
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
