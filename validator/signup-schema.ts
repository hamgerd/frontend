import * as z from "zod";

export const signupSchema = z
    .object({
        email: z.string().email({
            message: "لطفا یک ایمیل معتبر وارد کنید.",
        }),
        password: z.string().min(8, {
            message: "رمز عبور باید حداقل ۸ کاراکتر باشد.",
        }),
        confirmPassword: z.string().min(8, {
            message: "تکرار رمز عبور باید حداقل ۸ کاراکتر باشد.",
        }),
        terms: z.boolean().refine((val) => val === true, {
            message: "شما باید با قوانین و مقررات موافقت کنید.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "رمز عبور و تکرار آن باید یکسان باشند.",
        path: ["confirmPassword"],
    });
