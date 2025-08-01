import * as z from "zod";

export const newEventSchema = z.object({
  title: z.string().min(5, {
    message: "عنوان باید حداقل ۵ کاراکتر باشد.",
  }),
  description: z.string().min(20, {
    message: "توضیحات باید حداقل ۲۰ کاراکتر باشد.",
  }),
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
  capacity: z.string().min(1, {
    message: "لطفا ظرفیت را وارد کنید.",
  }),
  price: z.string(), // You can validate with .regex or .transform if needed
  organizerName: z.string().min(3, {
    message: "نام برگزارکننده باید حداقل ۳ کاراکتر باشد.",
  }),
  organizerEmail: z.string().email({
    message: "لطفا یک ایمیل معتبر وارد کنید.",
  }),
  organizerPhone: z.string().min(10, {
    message: "شماره تلفن باید حداقل ۱۰ کاراکتر باشد.",
  }),
});
