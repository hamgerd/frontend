import { CalendarDays, MapPin, Users } from "lucide-react";

export default function PlatformFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ویژگی‌های پلتفرم
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            ابزارهای قدرتمند برای مدیریت رویدادهای شما
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 place-items-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
              <CalendarDays className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">مدیریت رویدادها</h3>
            <p className="text-muted-foreground">
              ایجاد، برنامه‌ریزی و مدیریت رویدادهای مختلف با ابزارهای پیشرفته
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">مدیریت شرکت‌کنندگان</h3>
            <p className="text-muted-foreground">
              ثبت‌نام، تایید و مدیریت شرکت‌کنندگان در رویدادهای مختلف
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">مدیریت مکان‌ها</h3>
            <p className="text-muted-foreground">
              انتخاب و مدیریت مکان‌های برگزاری رویدادها با امکانات مختلف
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
