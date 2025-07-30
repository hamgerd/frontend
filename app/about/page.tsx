import { Calendar, Globe, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-10 mx-auto ">
      <div className="mx-5">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            درباره هم‌گرد
          </h1>
        </div>

        <div className=" gap-12 items-center mb-16 mx-auto flex">
          <div className="lg:mx-48 mx-4">
            <div className="space-y-4 text-muted-foreground leading-10">
              <p>
                هدف هم‌گرد ایجاد فضایی مدنی و کارآمد است تا گروه‌ها و اشخاص آزادانه بتوانند رویداد
                های فرهنگی، آموزشی و ... را برگزار نموده و افراد با شرکت در این رویداد ها با یکدیگر
                ارتباط برقرار کرده، تجربه‌ها و دانش خود را به اشتراک بگذارند. هم‌گرد تلاش دارد تا با
                بهره‌گیری از فناوری‌های آزاد و احترام به حقوق کاربران، بستری مناسب برای تعامل،
                یادگیری و هم‌افزایی فراهم آورد. این سکو به گونه‌ای طراحی شده که استفاده از آن برای
                همگان آسان باشد و در عین حال ابزارهای قدرتمندی برای مدیریت و برنامه‌ریزی رویدادها در
                اختیار برگزارکنندگان قرار دهد.
              </p>
              <p>
                هم‌گرد بر اصول شفافیت، استقلال و همکاری جمعی استوار است و جامعه‌ی کاربران آن نقش
                فعالی در توسعه، بهبود و گسترش امکانات این نرم‌افزار ایفا می‌کنند. در نهایت، هم‌گرد
                می‌کوشد تا گامی مؤثر در راستای تحقق فضای دیجیتال آزاد و مردمی بردارد.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-2">همگرد آزاد است!</h3>
              <p>
                پلتفرم همگرد نمونه ای از نرم‌افزار نشست است، نشست متن‌باز و آزاد است به این معنی که
                همه کاربران میتوانند کد منبع آن را مطالعه کرده، تغییر داده و برای مقاصد شخصی/تجاری
                استفاده کنند.
              </p>
              <p>
                این آزادی به کاربران امکان می‌دهد تا پلتفرم را مطابق با نیازهای خود سفارشی‌سازی
                کرده، ویژگی‌های جدیدی به آن بیفزایند یا با دیگر ابزارها و سامانه‌ها یکپارچه سازند.
                همچنین جامعه‌ای از مشارکت‌کنندگان شکل می‌گیرد که با همکاری و تبادل تجربه، در بهبود
                کیفیت، امنیت و پایداری پروژه نقش دارند.
              </p>
              <p>
                آزاد بودن هم‌گرد نه تنها از منظر فنی مهم است، بلکه بیانگر تعهد آن به اصولی چون
                شفافیت، حق انتخاب کاربران، و جلوگیری از انحصار در فضای دیجیتال است. با استفاده از
                هم‌گرد، شما نه تنها یک ابزار برای برگزاری رویداد در اختیار دارید، بلکه بخشی از یک
                جنبش بزرگ‌تر برای توسعه فناوری‌های آزاد و انسانی نیز هستید.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold">ماموریت ما</h2>
            <p className="max-w-[700px] text-muted-foreground">
              ما به دنبال ساده‌سازی و بهبود تجربه برگزاری و شرکت در رویدادها هستیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">حریم خصوصی</h3>
                  <p className="text-muted-foreground">
                    در همگرد ما متعهد به حفظ اطلاعات کاربران هستیم و بستری امن برای برگزاری رویداد
                    فراهم می‌کنیم.
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
                  <h3 className="text-xl font-bold mb-2">کارایی و نوآوری </h3>
                  <p className="text-muted-foreground">
                    با ابزارهای نوآورانه، فرآیند ثبت، مدیریت و حضور در رویدادها را سریع و کارآمد
                    می‌کنیم.
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
                    به رشد حرفه‌ای صنعت رویداد در ایران با ارائه زیرساخت، ابزار و دانش تخصصی کمک
                    می‌کنیم.
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
