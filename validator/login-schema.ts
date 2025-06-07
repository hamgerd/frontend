import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "لطفا یک ایمیل معتبر وارد کنید.",
  }),
  password: z.string().min(8, {
    message: "رمز عبور باید حداقل ۸ کاراکتر باشد.",
  }),
  rememberMe: z.boolean().default(false),
});
