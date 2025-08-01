import Image from "next/image";
import Link from "next/link";

export default function CopyRight() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm text-muted-foreground">
        <span dir="ltr" className="flex items-center gap-1 text-sm">
          <a className="hover:underline" href="https://hamgerd.ir">
            هم‌گرد
          </a>
          © 2025
          <span className="mx-1">licensed under</span>
          <a
            className="flex items-center hover:underline"
            href="https://creativecommons.org/licenses/by-sa/4.0/"
          >
            CC BY-SA 4.0
            <Image
              height={16}
              width={16}
              alt="CC"
              className="inline-block mx-0.5"
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            />
            <Image
              height={16}
              width={16}
              alt="BY"
              className="inline-block mx-0.5"
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            />
            <Image
              height={16}
              width={16}
              alt="SA"
              className="inline-block mx-0.5"
              src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
            />
          </a>
        </span>
      </p>
      <div className="flex gap-6">
        <Link
          className="text-sm text-muted-foreground hover:underline underline-offset-4"
          href="/tos"
        >
          شرایط استفاده
        </Link>
        <Link
          className="text-sm text-muted-foreground hover:underline underline-offset-4"
          href="/privacy"
        >
          حریم خصوصی
        </Link>
        <Link
          className="text-sm text-muted-foreground hover:underline underline-offset-4"
          href="/faq"
        >
          سوالات متداول
        </Link>
      </div>
    </div>
  );
}
