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
            درباره هم‌گرد
          </h1>
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
              <p>
                سکوی هم‌گرد نمونه ای از نرم‌افزار متن‌باز و آزاد «نشست» است که
                هدف آن ایجاد فضایی برای سازماندهی و برگزاری رویداد با تمرکز بر
                آزادی کاربر، حریم خصوصی و امنیت داده میباشد.
              </p>
              <p>
                هدف هم‌گرد ایجاد فضایی مدنی و کارآمد است تا گروه‌ها و اشخاص
                آزادانه بتوانند رویداد های فرهنگی، آموزشی و ... را برگزار نموده
                و افراد با شرکت در این رویداد ها با یکدیگر ارتباط برقرار کرده،
                تجربه‌ها و دانش خود را به اشتراک بگذارند. هم‌گرد تلاش دارد تا با
                بهره‌گیری از فناوری‌های آزاد و احترام به حقوق کاربران، بستری
                مناسب برای تعامل، یادگیری و هم‌افزایی فراهم آورد. این سکو به
                گونه‌ای طراحی شده که استفاده از آن برای همگان آسان باشد و در عین
                حال ابزارهای قدرتمندی برای مدیریت و برنامه‌ریزی رویدادها در
                اختیار برگزارکنندگان قرار دهد.
              </p>
              <p>
                هم‌گرد بر اصول شفافیت، استقلال و همکاری جمعی استوار است و
                جامعه‌ی کاربران آن نقش فعالی در توسعه، بهبود و گسترش امکانات این
                نرم‌افزار ایفا می‌کنند. در نهایت، هم‌گرد می‌کوشد تا گامی مؤثر در
                راستای تحقق فضای دیجیتال آزاد و مردمی بردارد.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-2">همگرد آزاد است!</h3>
              <p>
                پلتفرم همگرد نمونه ای از نرم‌افزار نشست است، نشست متن‌باز و آزاد
                است به این معنی که همه کاربران میتوانند کد منبع آن را مطالعه
                کرده، تغییر داده و برای مقاصد شخصی/تجاری استفاده کنند.
              </p>
              <p>
                این آزادی به کاربران امکان می‌دهد تا پلتفرم را مطابق با نیازهای
                خود سفارشی‌سازی کرده، ویژگی‌های جدیدی به آن بیفزایند یا با دیگر
                ابزارها و سامانه‌ها یکپارچه سازند. همچنین جامعه‌ای از
                مشارکت‌کنندگان شکل می‌گیرد که با همکاری و تبادل تجربه، در بهبود
                کیفیت، امنیت و پایداری پروژه نقش دارند.
              </p>
              <p>
                آزاد بودن هم‌گرد نه تنها از منظر فنی مهم است، بلکه بیانگر تعهد
                آن به اصولی چون شفافیت، حق انتخاب کاربران، و جلوگیری از انحصار
                در فضای دیجیتال است. با استفاده از هم‌گرد، شما نه تنها یک ابزار
                برای برگزاری رویداد در اختیار دارید، بلکه بخشی از یک جنبش
                بزرگ‌تر برای توسعه فناوری‌های آزاد و انسانی نیز هستید.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="هم‌گرد"
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
      </div>
    </div>
  );
}
