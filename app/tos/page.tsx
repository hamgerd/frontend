import React from "react";

export default function TermsPage() {
  return (
    <div className="container py-10 mx-auto">
      <div className="mx-5">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-2">
            شرایط و قوانین استفاده
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground font-medium">
            قوانین و مقررات استفاده از پلتفرم هم‌گرد برای برگزارکنندگان و
            شرکت‌کنندگان
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-800 p-6 md:p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            تعاریف و اصطلاحات به‌کار رفته
          </h2>
          <p className="text-gray-800 dark:text-gray-100 leading-8 mb-6 text-justify">
            در چارچوب پلتفرم هم‌گرد، تعاریف و اصطلاحات مشخصی به کار می‌رود که در
            ادامه به شرح آن‌ها پرداخته شده است:
          </p>
          <ul className="list-disc pr-6 text-gray-700 dark:text-gray-200 mb-8 space-y-4 text-base md:text-lg leading-8">
            <li>
              <span className="font-bold">«رویداد»:</span> برنامه‌ای با زمان
              آغاز و پایان مشخص، مکان برگزاری معین (فیزیکی یا مجازی) و نحوه‌ی
              اجرای تعریف‌شده است. هدف رویدادها گردهمایی، تبادل تجربه، یادگیری
              یا معرفی موضوعی خاص است و می‌توانند حضوری یا آنلاین (وبینار)
              باشند. شرکت در آن‌ها ممکن است رایگان یا با پرداخت هزینه باشد.
            </li>
            <li>
              <span className="font-bold">«برگزارکننده»:</span> شخص حقیقی یا
              نماینده‌ی قانونی یک شخص حقوقی که مسئول ثبت، معرفی و مدیریت رویداد
              است و باید صلاحیت کافی برای انتشار اطلاعات، دریافت وجوه و انجام
              بازپرداخت‌ها را داشته باشد.
            </li>
            <li>
              <span className="font-bold">«شرکت‌کننده»:</span> هر فردی که در یک
              رویداد ثبت‌نام می‌کند و حضور می‌یابد. شرکت‌کننده می‌تواند
              داوطلبانه، رایگان یا با پرداخت هزینه شرکت کند و از محتوای رویداد
              بهره‌مند شود. شرکت در رویداد مستلزم پذیرش شرایط برگزارکننده و
              رعایت قوانین پلتفرم است.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">
            شرایط و قوانین مربوط به برگزارکننده‌ها
          </h2>
          <ul className="list-disc pr-6 text-gray-700 dark:text-gray-200 mb-8 space-y-2 text-base md:text-lg leading-8">
            <li>
              اطلاعات ثبت‌شده درباره‌ی رویداد باید{" "}
              <span className="font-semibold">واقعی، دقیق و شفاف</span> باشد و
              از ارائه اطلاعات نادرست یا گمراه‌کننده پرهیز شود.
            </li>
            <li>
              هدف از برگزاری رویداد نباید{" "}
              <span className="font-semibold">
                سوءاستفاده از بستر پلتفرم برای تبلیغ، خرید و فروش یا معاملات
                خارج از موضوع رویداد
              </span>{" "}
              باشد.
            </li>
            <li>
              محتوای رویداد، هدف و نحوه‌ی اجرا{" "}
              <span className="font-semibold">
                نباید ناقض قوانین و مقررات جمهوری اسلامی ایران
              </span>{" "}
              باشد.
            </li>
            <li>
              رعایت قانون حمایت حقوق مؤلفان، مصنفان و هنرمندان الزامی است.
            </li>
            <li>
              در صورت نقض هر یک از موارد فوق، هم‌گرد می‌تواند صفحه رویداد را
              متوقف یا حذف کند.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-6">
            استرداد بلیت خریداری‌شده توسط خریداران
          </h2>
          <p className="text-gray-800 dark:text-gray-100 leading-8 mb-4 text-justify">
            قوانین استرداد بلیت توسط برگزارکننده تعیین می‌شود و او می‌تواند تا
            زمان آغاز رویداد، بازه‌ای برای پذیرش درخواست‌های استرداد مشخص کند.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-8 mb-4 text-justify">
            در صورت تغییر اساسی در رویداد (مانند تغییر زمان بیش از ۱۲ ساعت،
            تغییر مکان بیش از ۲۰ کیلومتر یا تغییر موضوع)، خریدار حق دارد بدون
            قید و شرط بلیت را بازگرداند و کل مبلغ پرداختی را دریافت کند.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-8 mb-4 text-justify">
            اگر درخواست‌های استرداد بلیت به شکل غیرعادی و بیش از حد متعارف ثبت
            شود (به تشخیص هم‌گرد)، پلتفرم می‌تواند به‌صورت مستقل نسبت به ابطال
            بلیت‌ها و بازپرداخت مبالغ اقدام کند.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-8 mb-4 text-justify">
            اگر هم‌گرد مبالغ دریافتی را به شرکت‌کنندگان بازگرداند، برگزارکننده
            موظف است کارمزد خدمات و هزینه‌های نقل و انتقال وجوه را پرداخت کند.
          </p>
          <p className="text-gray-800 dark:text-gray-100 leading-8 mb-4 text-justify">
            اگر برگزارکننده تصمیم به لغو رویداد داشته باشد، باید از طریق پلتفرم
            درخواست تسویه‌حساب کند. پس از کسر کارمزد، مبلغ باقی‌مانده به
            برگزارکننده پرداخت می‌شود و او موظف است شخصاً وجه شرکت‌کنندگان را
            بازگرداند.
          </p>
          <h2 className="text-2xl font-bold mb-6">رضایت</h2>
          <p className="text-gray-800 dark:text-gray-100 leading-8 mb-2 text-justify">
            با استفاده از وب‌سایت ما، شما با سیاست حریم خصوصی و شرایط آن موافقت
            می‌کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
