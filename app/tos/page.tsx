import React from "react";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mx-5">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            شرایط و قوانین استفاده
          </h1>
          <p className="text-muted-foreground max-w-[700px] text-lg font-medium md:text-xl">
            قوانین و مقررات استفاده از پلتفرم هم‌گرد برای برگزارکنندگان و شرکت‌کنندگان
          </p>
        </div>
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-10 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-6 text-2xl font-bold">تعاریف و اصطلاحات به‌کار رفته</h2>
          <p className="mb-6 text-justify leading-8 text-gray-800 dark:text-gray-100">
            در چارچوب پلتفرم هم‌گرد، تعاریف و اصطلاحات مشخصی به کار می‌رود که در ادامه به شرح آن‌ها
            پرداخته شده است:
          </p>
          <ul className="mb-8 list-disc space-y-4 pr-6 text-base leading-8 text-gray-700 md:text-lg dark:text-gray-200">
            <li>
              <span className="font-bold">«رویداد»:</span> برنامه‌ای با زمان آغاز و پایان مشخص، مکان
              برگزاری معین (فیزیکی یا مجازی) و نحوه‌ی اجرای تعریف‌شده است. هدف رویدادها گردهمایی،
              تبادل تجربه، یادگیری یا معرفی موضوعی خاص است و می‌توانند حضوری یا آنلاین (وبینار)
              باشند. شرکت در آن‌ها ممکن است رایگان یا با پرداخت هزینه باشد.
            </li>
            <li>
              <span className="font-bold">«برگزارکننده»:</span> شخص حقیقی یا نماینده‌ی قانونی یک شخص
              حقوقی که مسئول ثبت، معرفی و مدیریت رویداد است و باید صلاحیت کافی برای انتشار اطلاعات،
              دریافت وجوه و انجام بازپرداخت‌ها را داشته باشد.
            </li>
            <li>
              <span className="font-bold">«شرکت‌کننده»:</span> هر فردی که در یک رویداد ثبت‌نام
              می‌کند و حضور می‌یابد. شرکت‌کننده می‌تواند داوطلبانه، رایگان یا با پرداخت هزینه شرکت
              کند و از محتوای رویداد بهره‌مند شود. شرکت در رویداد مستلزم پذیرش شرایط برگزارکننده و
              رعایت قوانین پلتفرم است.
            </li>
          </ul>
          <h2 className="mb-6 text-2xl font-bold">شرایط و قوانین مربوط به برگزارکننده‌ها</h2>
          <ul className="mb-8 list-disc space-y-2 pr-6 text-base leading-8 text-gray-700 md:text-lg dark:text-gray-200">
            <li>
              اطلاعات ثبت‌شده درباره‌ی رویداد باید{" "}
              <span className="font-semibold">واقعی، دقیق و شفاف</span> باشد و از ارائه اطلاعات
              نادرست یا گمراه‌کننده پرهیز شود.
            </li>
            <li>
              هدف از برگزاری رویداد نباید{" "}
              <span className="font-semibold">
                سوءاستفاده از بستر پلتفرم برای تبلیغ، خرید و فروش یا معاملات خارج از موضوع رویداد
              </span>{" "}
              باشد.
            </li>
            <li>
              محتوای رویداد، هدف و نحوه‌ی اجرا{" "}
              <span className="font-semibold">نباید ناقض قوانین و مقررات جمهوری اسلامی ایران</span>{" "}
              باشد.
            </li>
            <li>رعایت قانون حمایت حقوق مؤلفان، مصنفان و هنرمندان الزامی است.</li>
            <li>
              در صورت نقض هر یک از موارد فوق، هم‌گرد می‌تواند صفحه رویداد را متوقف یا حذف کند.
            </li>
          </ul>
          <h2 className="mb-6 text-2xl font-bold">استرداد بلیت خریداری‌شده توسط خریداران</h2>
          <p className="mb-4 text-justify leading-8 text-gray-800 dark:text-gray-100">
            قوانین استرداد بلیت توسط برگزارکننده تعیین می‌شود و او می‌تواند تا زمان آغاز رویداد،
            بازه‌ای برای پذیرش درخواست‌های استرداد مشخص کند.
          </p>
          <p className="mb-4 text-justify leading-8 text-gray-800 dark:text-gray-100">
            در صورت تغییر اساسی در رویداد (مانند تغییر زمان بیش از ۱۲ ساعت، تغییر مکان بیش از ۲۰
            کیلومتر یا تغییر موضوع)، خریدار حق دارد بدون قید و شرط بلیت را بازگرداند و کل مبلغ
            پرداختی را دریافت کند.
          </p>
          <p className="mb-4 text-justify leading-8 text-gray-800 dark:text-gray-100">
            اگر درخواست‌های استرداد بلیت به شکل غیرعادی و بیش از حد متعارف ثبت شود (به تشخیص
            هم‌گرد)، پلتفرم می‌تواند به‌صورت مستقل نسبت به ابطال بلیت‌ها و بازپرداخت مبالغ اقدام
            کند.
          </p>
          <p className="mb-4 text-justify leading-8 text-gray-800 dark:text-gray-100">
            اگر هم‌گرد مبالغ دریافتی را به شرکت‌کنندگان بازگرداند، برگزارکننده موظف است کارمزد خدمات
            و هزینه‌های نقل و انتقال وجوه را پرداخت کند.
          </p>
          <p className="mb-4 text-justify leading-8 text-gray-800 dark:text-gray-100">
            اگر برگزارکننده تصمیم به لغو رویداد داشته باشد، باید از طریق پلتفرم درخواست تسویه‌حساب
            کند. پس از کسر کارمزد، مبلغ باقی‌مانده به برگزارکننده پرداخت می‌شود و او موظف است شخصاً
            وجه شرکت‌کنندگان را بازگرداند.
          </p>
          <h2 className="mb-6 text-2xl font-bold">رضایت</h2>
          <p className="mb-2 text-justify leading-8 text-gray-800 dark:text-gray-100">
            با استفاده از وب‌سایت ما، شما با سیاست حریم خصوصی و شرایط آن موافقت می‌کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
