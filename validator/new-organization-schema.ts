import * as z from "zod"

export const newOrganizationFormSchema = z.object({
    name: z.string().min(3, {
        message: "نام سازمان باید حداقل ۳ کاراکتر باشد.",
    }),
    description: z.string().optional(),
    category: z
        .string({
            required_error: "لطفا یک دسته‌بندی انتخاب کنید.",
        })
        .optional(),
    foundedYear: z
        .string({
            required_error: "لطفا سال تاسیس را وارد کنید.",
        })
        .optional(),
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
    username: z
        .string()
        .min(3, { message: "نام کاربری باید حداقل ۳ حرف باشد" })
        .max(20, { message: "نام کاربری باید حداکثر ۲۰ حرف باشد" })
        .regex(/^[A-Za-z0-9_]+$/, {
            message:
                "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و زیرخط (_) باشد",
        }),

    website: z.string().optional(),
    facebook: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
});