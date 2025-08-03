import * as z from "zod";

export const newEventSchema = z.object({
  title: z.string().min(5, {
    message: "عنوان باید حداقل ۵ کاراکتر باشد.",
  }),
  description: z.string().min(20, {
    message: "توضیحات باید حداقل ۲۰ کاراکتر باشد.",
  }),
  organization: z.string(),
  category: z.string().nonempty("لطفا یک دسته‌بندی انتخاب کنید."),
  startDate: z.string().nonempty("لطفا تاریخ شروع را وارد کنید."),
  endDate: z.string().nonempty("لطفا تاریخ پایان را وارد کنید."),
  startTime: z.string().nonempty("لطفا زمان شروع را وارد کنید."),
  endTime: z.string().nonempty("لطفا زمان پایان را وارد کنید."),
  location: z.string().min(5, {
    message: "مکان باید حداقل ۵ کاراکتر باشد.",
  }),
  address: z.string().min(10, {
    message: "آدرس باید حداقل ۱۰ کاراکتر باشد.",
  }),
  tickets: z
    .array(
      z.object({
        title: z.string().min(1, "عنوان بخش الزامی است"),
        description: z.string().min(1, "توضیحات بخش الزامی است"),
        capacity: z.number().min(1, "ظرفیت باید حداقل ۱ باشد"),
        price: z.number().min(0, "قیمت نمی‌تواند منفی باشد"),
      })
    )
    .min(1, "حداقل یک بخش الزامی است"),
});
