/* eslint-disable max-lines-per-function */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/axios";

export default function EventFormPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const publicId = searchParams.get("public_id");
  const organizationUsername = searchParams.get("organizationUsername");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [speakerAmount, setSpeakersAmount] = useState<string>("1");

  const MAX_FILE_SIZE = 1 * 1024 * 1024;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

  const EventSchema = z.object({
    image: z
      .instanceof(File)
      .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "فرمت فایل باید JPG یا PNG باشد.",
      })
      .refine(file => file.size <= MAX_FILE_SIZE, {
        message: "حجم فایل باید کمتر از ۱ مگابایت باشد.",
      }),
    speakers: z.array(
      z.object({
        name: z.string().nonempty("اسم برای سخنران انتخاب کنید"),
        image: z
          .instanceof(File)
          .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
            message: "فرمت فایل باید JPG یا PNG باشد.",
          })
          .refine(file => file.size <= MAX_FILE_SIZE, {
            message: "حجم فایل باید کمتر از ۱ مگابایت باشد.",
          })
          .optional(),
      })
    ),
  });

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      image: undefined,
      speakers: [{ name: "", image: undefined }],
    },
  });

  async function onSubmit(values: z.infer<typeof EventSchema>) {
    setIsLoading(true);
    try {
      await Promise.all(
        values.speakers.map(speaker => {
          const fd = new FormData();
          fd.append("name", speaker.name);
          fd.append("image", speaker.image || "");
          return api.post(`/api/v1/events/${publicId}/speakers/`, fd, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        })
      );

      const eventFormData = new FormData();
      eventFormData.append("status", "sch");
      eventFormData.append("is_active", "true");
      eventFormData.append("organization", organizationUsername || "");
      eventFormData.append("image", values.image);

      await api.patch(`/api/v1/events/${publicId}/`, eventFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast({
        title: "رویداد با موفقیت ایجاد شد",
        description: "رویداد شما ایجاد شد.",
        variant: "default",
      });
      form.reset();
      router.push("/events");
    } catch (error) {
      console.log("Form error is:", error);
      toast({
        title: "خطا در ایجاد روایداد",
        description: "مشکلی در ایجاد  به وجود آمد. لطفا دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="container mx-auto mt-10 max-w-[900px]">
      <Form {...form}>
        <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-3">
            <p> تعداد سخنران های رویداد</p>
            <Select
              onValueChange={value => {
                setSpeakersAmount(value);
                form.setValue(
                  "speakers",
                  Array.from({ length: Number(value) }, () => ({ name: "", image: undefined }))
                );
              }}
            >
              <SelectTrigger className="w-20">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <SelectItem key={n} value={n.toString()}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {Array.from({ length: Number(speakerAmount) }).map((_, index) => (
            // eslint-disable-next-line @eslint-react/no-array-index-key
            <Card className="mt-4" key={index}>
              <CardHeader>
                <CardTitle>سخنران های رویداد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  name={`speakers.${index}.name`}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام سخنران {index + 1}</FormLabel>
                      <FormControl>
                        <Input className="mt-2" placeholder="امیر احمدی" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name={`speakers.${index}.image`}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>عکس سخنران</FormLabel>
                      <div className="border-input mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10">
                        <div className="text-center">
                          <label className="hover:text-primary/80 relative cursor-pointer rounded-md font-semibold">
                            <Upload className="text-muted-foreground mx-auto h-12 w-12" />
                            <div className="text-muted-foreground mt-4 flex text-sm leading-6">
                              <span className="text-primary text-3xl">آپلود فایل </span>
                              <input
                                accept=".jpg,.jpeg,.png"
                                className="sr-upload hidden"
                                type="file"
                                onChange={e => {
                                  if (e.target.files && e.target.files[0]) {
                                    field.onChange(e.target.files[0]);
                                  }
                                }}
                              />
                            </div>
                          </label>
                          <p className="text-muted-foreground text-xs leading-5">
                            PNG, JPG تا ۱ مگابایت
                          </p>
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>عکس ایونت </CardTitle>
            </CardHeader>
            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="border-input mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10">
                    <div className="text-center">
                      <label className="hover:text-primary/80 relative cursor-pointer rounded-md font-semibold">
                        <Upload className="text-muted-foreground mx-auto h-12 w-12" />
                        <div className="text-muted-foreground mt-4 flex text-sm leading-6">
                          <span className="text-primary mb-2 text-3xl">آپلود فایل </span>
                          <input
                            accept=".jpg,.jpeg,.png"
                            className="sr-upload hidden"
                            id="event-pic"
                            name="event-pic"
                            type="file"
                            onChange={e => {
                              if (e.target.files && e.target.files[0]) {
                                field.onChange(e.target.files[0]);
                              }
                            }}
                          />
                        </div>
                      </label>
                      <p className="text-muted-foreground text-xs leading-5">
                        PNG, JPG تا ۱ مگابایت
                      </p>
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </Card>

          <div className="mb-10 flex justify-center gap-4">
            <Button asChild size="lg" variant="outline">
              <Link href="/dashboard/tickets">انصراف</Link>
            </Button>
            <Button size="lg" disabled={isLoading} type="submit">
              {isLoading ? "در حال ایجاد..." : "ایجاد رویداد"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
