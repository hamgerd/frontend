import * as z from "zod";

const persianToEnglishMap: Record<string, string> = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};

const normalizeNumbers = (input: string): string => {
  return input.replace(/[۰-۹]/g, char => persianToEnglishMap[char] || char);
};

export const newEventSchema = z.object({
  title: z.string().min(5, {
    message: "عنوان باید حداقل ۵ کاراکتر باشد.",
  }),
  description: z.string().min(20, {
    message: "توضیحات باید حداقل ۲۰ کاراکتر باشد.",
  }),
  organization: z.string(),
  category: z.string().nonempty("لطفا یک دسته‌بندی انتخاب کنید."),
  start_date: z.string().nonempty("لطفا تاریخ شروع را وارد کنید."),
  end_date: z.string().nonempty("لطفا تاریخ پایان را وارد کنید."),
  startTime: z.string().nonempty("لطفا زمان شروع را وارد کنید."),
  endTime: z.string().nonempty("لطفا زمان پایان را وارد کنید."),
  location: z.string().min(5, {
    message: "مکان باید حداقل ۵ کاراکتر باشد.",
  }),
  tickets: z.array(
    z.object({
      title: z.string().min(1, "عنوان بخش الزامی است"),
      description: z.string().min(1, "توضیحات بخش الزامی است"),
      capacity: z
        .string()
        .transform(val => normalizeNumbers(val))
        .refine(val => /^\d+$/.test(val), {
          message: "ظرفیت فقط میتواند عدد باشد",
        }),
      price: z
        .string()
        .transform(val => normalizeNumbers(val))
        .refine(val => /^\d+$/.test(val), {
          message: "قیمت فقط میتواند عدد باشد",
        }),
    })
  ),
});
