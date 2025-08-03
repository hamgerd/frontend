import { z } from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export const newOrganizationFormSchema = z.object({
  name: z.string().min(3, {
    message: "نام سازمان باید حداقل ۳ کاراکتر باشد.",
  }),
  description: z.string().optional(),
  category: z.string({
    error: "لطفا یک دسته‌بندی انتخاب کنید.",
  }),
  location: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().min(10, {
    message: "شماره تلفن باید حداقل ۱۰ کاراکتر باشد.",
  }),
  email: z
    .string()
    .email({
      message: "لطفا یک ایمیل معتبر وارد کنید.",
    })
    .or(z.literal(""))
    .optional(),
  logoFile: z
    .instanceof(File)
    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "فرمت فایل باید JPG یا PNG باشد.",
    })
    .refine(file => file.size <= MAX_FILE_SIZE, {
      message: "حجم فایل باید کمتر از ۱ مگابایت باشد.",
    })
    .optional(),
  username: z
    .string()
    .min(3, { message: "نام کاربری باید حداقل ۳ حرف باشد" })
    .max(20, { message: "نام کاربری باید حداکثر ۲۰ حرف باشد" })
    .regex(/^\w+$/, {
      message: "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و زیرخط (_) باشد",
    }),
  website: z.string().optional(),
  telegram: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
});
