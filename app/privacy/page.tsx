import React from "react";

export default function PrivacyPage() {
  return (
    <div className="container py-10 mx-auto">
      <div className="mx-5">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            سیاست‌نامه حریم خصوصی
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            اطلاعات و سیاست‌های حریم خصوصی کاربران پلتفرم هم‌گرد
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 p-6 md:p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">تعاریف</h2>
          <ul className="list-disc pr-6 text-gray-700 dark:text-gray-200 mb-8 space-y-2">
            <li>
              <span className="font-semibold">ارائه‌دهنده خدمات:</span> به معنای هر شخص حقیقی یا
              حقوقی است که اطلاعات را از طرف شرکت پردازش می‌کند...
            </li>
            <li>
              <span className="font-semibold">داده شخصی:</span> به معنای هر نوع داده‌ای است که به هر
              شخص حقیقی و حقوقی مشخص و قابل شناسایی مرتبط باشد.
            </li>
            <li>
              <span className="font-semibold">حساب کاربری:</span> به معنای یک حساب کاربری منحصر به
              فرد است که برای دسترسی شما به سرویس یا بخش‌هایی از سرویس هم‌گرد ایجاد شده است.
            </li>
            <li>
              <span className="font-semibold">دستگاه:</span> به معنای هر نوع دستگاهی است که دسترسی
              به خدمات ما را برای کاربر میسر می‌کند.
            </li>
            <li>
              <span className="font-semibold">خدمت:</span> به معنای وبگاه هم‌گرد به نشانی{" "}
              <a className="text-blue-600 underline" href="https://hamgerd.ir">
                hamgerd.ir
              </a>{" "}
              و خدمات ارائه شده در این سایت است
            </li>
            <li>
              <span className="font-semibold">تیم همگرد:</span> تیم توسعه نرم‌افزار نشست و پلتفرم
              همگرد که در این سیاست‌نامه تحت نام «همگرد» یا «ما» می‌باشد.
            </li>
            <li>
              <span className="font-semibold">کشور:</span> به جمهوری اسلامی ایران اشاره دارد.
            </li>
            <li>
              <span className="font-semibold">کوکی:</span> به معنای رشته‌ای است که به درخواست یک
              سایت، توسط کارساز ایجاد می‌شود و در کارخواه ذخیره می‌گردد.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">جمع‌آوری و استفاده از اطلاعات شخصی</h2>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-4">
            انواع داده‌های جمع‌آوری شده:
          </p>
          <ul className="list-disc pr-6 text-gray-700 dark:text-gray-200 mb-8 space-y-2">
            <li>
              <span className="font-semibold">اطلاعات شخصی:</span> هنگام استفاده از خدمت ما، ممکن
              است از شما بخواهیم اطلاعات شخصی خود را که برای شناسایی یا تماس با شما لازم است، در
              اختیار ما قرار دهید. این اطلاعات ممکن است شامل موارد زیر باشد:
              <ul className="list-disc pr-6 text-green-100 mt-2 space-y-1">
                <li>آدرس ایمیل</li>
                <li>نام و نام خانوادگی</li>
                <li>شماره تلفن</li>
                <li>اطلاعات فنی و گزارش سرور که به صورت اتوماتیک جمع‌آوری می‌شود</li>
              </ul>
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">افشای اطلاعات شخصی کاربران</h2>
          <ul className="list-disc pr-6 text-gray-700 dark:text-gray-200 mb-8">
            <li>
              <span className="font-semibold">اجرای قانون:</span> در شرایط خاص، چنانچه هم‌گرد ذیل
              قانون و یا به درخواست مقام ذی‌صلاح از جمله دادگاه ملزم به افشای اطلاعات شما گردد،
              اطلاعات مورد درخواست را فاش خواهد کرد و از این بابت مسئولیتی نخواهد داشت.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">حریم خصوصی کودکان</h2>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-8">
            ما مستقیماً به افراد زیر ۱۵ سال خدماتی ارائه نمی‌دهیم و آگاهانه اطلاعات شخصی افراد زیر
            ۱۵ سال را جمع‌آوری نمی‌کنیم. اگر والدین شخص زیر ۱۵ سال یا سرپرست وی هستید و می‌دانید
            فرزند شما یا شخص دیگری اطلاعات شخصی وی را در اختیار ما قرار داده است، لطفاً با ما تماس
            بگیرید. اگر مطلع شویم که اطلاعات شخصی را از افراد زیر ۱۵ سال بدون تأیید رضایت والدین
            جمع‌آوری کرده‌ایم، برای حذف این اطلاعات از سرورهای خود اقدام خواهیم کرد.
          </p>
          <h2 className="text-2xl font-bold mb-6">امنیت اطلاعات شخصی کاربران</h2>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-4">
            امنیت اطلاعات شخصی شما برای ما مهم است، اما به یاد داشته باشید که هیچ روش انتقال از طریق
            اینترنت یا روش ذخیره‌سازی و نگه‌داری الکترونیکی ۱۰۰٪ ایمن نیست. در حالی که ما تلاش
            می‌کنیم از ابزارهای قابل قبول تجاری برای محافظت از اطلاعات شخصی شما استفاده کنیم، اما
            نمی‌توانیم امنیت مطلق آن را تضمین کنیم.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-8">
            ما داده‌های کاربران را در یک فضای نگهداری داده که از شخص ثالث خریداری کرده‌ایم، نگهداری
            و ذخیره می‌کنیم. ما تمام اقدامات لازم جهت تأمین امنیت این اطلاعات را انجام خواهیم داد و
            چنانچه هر شخص خارجی به صورت غیرقانونی از طریق هک کردن سیستم به این اطلاعات ذخیره شده
            دسترسی پیدا کند، پیگرد قانونی این موضوع بر عهده ما خواهد بود. در صورتی که ما مرتکب قصور
            فاحش نشده باشیم در این خصوص مسئولیتی در قبال کاربران نداریم.
          </p>
          <h2 className="text-2xl font-bold mb-6">دسترسی به وبسایت‌های دیگر</h2>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-4">
            شما ممکن است در برخی موارد از سایت ما به سایت دیگری منتقل شده و یا آدرس وبسایت دیگری در
            وبسایت ما درج شده باشد، اگر از این سایت‌ها دیدن کنید، به سایت شخص ثالث هدایت می‌شوید که
            از کنترل ما خارج است. ما اکیداً به شما توصیه می‌کنیم که سیاست‌نامه حریم خصوصی هر سایتی
            را که بازدید می‌کنید مرور کنید.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-8">
            ما هیچ کنترلی بر محتوا، خط‌مشی‌های رازداری یا عملکرد هیچ سایت یا خدمات شخص ثالثی نداریم
            و هیچ مسئولیتی بر عهده ما نیست.
          </p>
          <h2 className="text-2xl font-bold mb-6">تغییرات در سیاست‌نامه حریم خصوصی</h2>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-4">
            ما ممکن است سیاست حفظ حریم خصوصی خود را هر از گاهی به‌روز کنیم. ما با ارسال سیاست‌نامه
            حریم خصوصی جدید در این صفحه، شما را از هرگونه تغییری مطلع خواهیم کرد.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-8">
            ما قبل از اینکه سیاست‌نامه حریم خصوصی تغییر کند، از طریق ایمیل و یا هر وسیله ارتباط
            الکترونیکی این امر را به شما اطلاع خواهیم داد و تاریخ «آخرین به‌روزرسانی» را در بالای
            این سیاست‌نامه حریم خصوصی به‌روز می‌کنیم.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-8">
            به شما توصیه می‌شود برای هرگونه تغییر، این سیاست حفظ حریم خصوصی را به طور مرتب چک کنید.
            نسخه اجرایی و نهایی سیاست‌نامه حریم خصوصی در این صفحه در دسترس است.
          </p>
          <h2 className="text-2xl font-bold mb-6">ارتباط با ما</h2>
          <p className="text-gray-800 dark:text-gray-100 leading-7 mb-4">
            اگر شما هرگونه سوال و یا پیشنهادی در رابطه با این سیاست‌نامه حریم خصوصی دارید از این
            طریق با ما تماس بگیرید:
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-7 font-semibold">
            ایمیل:{" "}
            <a
              className="text-blue-600 dark:text-blue-400 underline"
              href="mailto:support@hamgerd.ir"
            >
              support@hamgerd.ir
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
