/* eslint-disable max-lines-per-function */
import type { UseFormReturn } from "react-hook-form";
import type * as z from "zod";

import moment from "jalali-moment";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";

import type { newEventSchema } from "@/validator/new-event-schema";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/axios";
import { cn } from "@/lib/utils";

interface NewEventFormProps {
  form: UseFormReturn<z.infer<typeof newEventSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof newEventSchema>) => void;
}

interface Category {
  title: string;
}

interface Organization {
  public_id: string;
  username: string;
  name: string;
}

export default function NewEventForm({ form, isLoading, onSubmit }: NewEventFormProps) {
  const [organization, setOrganization] = useState<Organization[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const { control } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tickets",
  });

  useEffect(() => {
    if (fields.length === 0) {
      append({ title: "", description: "", capacity: "100", price: "0" });
    }
  }, [append, fields]);

  const handleTicketCountChange = (value: string) => {
    const count = parseInt(value, 10);
    const currentLength = fields.length;

    if (count > currentLength) {
      for (let i = currentLength; i < count; i++) {
        append({ title: "", description: "", capacity: "100", price: "0" });
      }
    } else if (count < currentLength) {
      for (let i = currentLength; i > count; i--) {
        remove(i - 1);
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get("api/v1/events/categories/");
      setCategories(res.data.results);
    } catch (error) {
      console.log("error in fetching categories:", error);
    }
  };
  const fetchOrganization = async () => {
    try {
      const res = await api.get("api/v1/users/me/");
      setOrganization(res.data.organizations);
    } catch (error) {
      console.log("orgnization fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchOrganization();
  }, []);

  return (
    <Form {...form}>
      <form className="space-y-10 lg:mx-50" onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>اطلاعات اصلی</CardTitle>
            <CardDescription>اطلاعات اصلی رویداد خود را وارد کنید</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              name="title"
              control={form.control}
              render={({ field: titleField }) => (
                <FormItem>
                  <FormLabel>عنوان رویداد</FormLabel>
                  <FormControl className="mt-2">
                    <Input placeholder="مثال: کنفرانس فناوری‌های نوین وب" {...titleField} />
                  </FormControl>
                  <FormDescription>
                    عنوان رویداد خود را وارد کنید. این عنوان در همه جا نمایش داده می‌شود.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field: descriptionField }) => (
                <FormItem>
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl className="mt-2">
                    <Textarea
                      className="min-h-32 resize-none"
                      placeholder="توضیحاتی درباره رویداد خود بنویسید..."
                      {...descriptionField}
                    />
                  </FormControl>
                  <FormDescription>
                    توضیحات کاملی درباره رویداد، هدف آن و مخاطبان آن بنویسید.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="organization"
              control={form.control}
              render={({ field: organizationField }) => (
                <FormItem>
                  <FormLabel>سازمان برگزار کننده</FormLabel>
                  <FormControl className="mt-2">
                    <Select
                      value={organizationField.value}
                      onValueChange={organizationField.onChange}
                    >
                      <SelectTrigger dir="rtl" className="mt-2">
                        <SelectValue placeholder="یکی از سازمان های خود را انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        {organization.map(item => (
                          <SelectItem key={item.public_id} value={item.username}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>سازمان خود را انتخاب کنید</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="category"
              control={form.control}
              render={({ field: categoryField }) => (
                <FormItem>
                  <FormLabel>دسته‌بندی</FormLabel>
                  <FormControl className="mt-2">
                    <Select
                      defaultValue={categoryField.value}
                      onValueChange={categoryField.onChange}
                    >
                      <SelectTrigger dir="rtl" className="mt-2">
                        <SelectValue placeholder="یک دسته‌بندی انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        {categories?.map(categorie => (
                          <SelectItem key={categorie.title} value={categorie.title}>
                            {categorie.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    دسته‌بندی رویداد به کاربران کمک می‌کند تا رویداد شما را راحت‌تر پیدا کنند.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>زمان و مکان</CardTitle>
            <CardDescription>زمان و مکان برگزاری رویداد را مشخص کنید</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                name="start_date"
                control={form.control}
                render={({ field: startDateField }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>تاریخ شروع</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "text-left font-normal",
                              !startDateField.value && "text-muted-foreground"
                            )}
                          >
                            <span className="flex w-full flex-row items-center justify-between gap-2">
                              <span>
                                {startDateField.value ? (
                                  moment(startDateField.value).locale("fa").format("jYYYY/jMM/jDD")
                                ) : (
                                  <span>یه روز را انتخاب کنید</span>
                                )}
                              </span>
                              <CalendarIcon className="h-4 w-4 opacity-50" />
                            </span>
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="">
                        <Calendar
                          className="w-auto"
                          disabled={date => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          selected={startDateField.value}
                          captionLayout="dropdown"
                          endMonth={new Date(2028, 11)}
                          mode="single"
                          onSelect={startDateField.onChange}
                          startMonth={new Date(2025, 0)}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="end_date"
                control={form.control}
                render={({ field: endDateField }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>تاریخ پایان</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "text-left font-normal",
                              !endDateField.value && "text-muted-foreground"
                            )}
                          >
                            <span className="flex w-full flex-row items-center justify-between gap-2">
                              <span>
                                {endDateField.value ? (
                                  moment(endDateField.value).locale("fa").format("jYYYY/jMM/jDD")
                                ) : (
                                  <span>یه روز را انتخاب کنید</span>
                                )}
                              </span>
                              <CalendarIcon className="h-4 w-4 opacity-50" />
                            </span>
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="">
                        <Calendar
                          className="w-auto"
                          disabled={date => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          selected={endDateField.value}
                          captionLayout="dropdown"
                          endMonth={new Date(2028, 11)}
                          mode="single"
                          onSelect={endDateField.onChange}
                          startMonth={new Date(2025, 0)}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                name="startTime"
                control={form.control}
                render={({ field: startTimeField }) => (
                  <FormItem>
                    <FormLabel>زمان شروع</FormLabel>
                    <FormControl className="mt-2">
                      <Input
                        dir="ltr"
                        type="time"
                        value={startTimeField.value}
                        onChange={e => {
                          const val = e.target.value;
                          startTimeField.onChange(val);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="endTime"
                control={form.control}
                render={({ field: endTimeField }) => (
                  <FormItem>
                    <FormLabel>زمان پایان</FormLabel>
                    <FormControl className="mt-2">
                      <Input dir="ltr" type="time" {...endTimeField} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator />
            <FormField
              name="location"
              control={form.control}
              render={({ field: locationField }) => (
                <FormItem>
                  <FormLabel>مکان برگزاری</FormLabel>
                  <FormControl className="mt-2">
                    <Input placeholder="مثال: سالن همایش‌های برج میلاد" {...locationField} />
                  </FormControl>
                  <FormDescription>نام مکان برگزاری رویداد را وارد کنید.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex items-center gap-3">
          <p>ایونت شامل چند بخش می‌شود؟</p>
          <Select onValueChange={handleTicketCountChange}>
            <SelectTrigger className="mt-2 w-20">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map(n => (
                <SelectItem key={n} value={n.toString()}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {fields.map((field, index) => (
          <Card key={field.id}>
            <CardHeader>
              <CardTitle>بخش بندی ایونت</CardTitle>
              <CardDescription>تعداد شرکت‌کنندگان و قیمت بلیت را مشخص کنید</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-6">
                <FormField
                  name={`tickets.${index}.title`}
                  control={control}
                  render={({ field: ticketTitleField }) => (
                    <FormItem>
                      <FormLabel>عنوان بخش {index + 1} رویداد</FormLabel>
                      <FormControl className="mt-2">
                        <Input placeholder="سخنرانی آقای احمدی" {...ticketTitleField} />
                      </FormControl>
                      <FormDescription>عنوانی برای بخش بنویسید</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`tickets.${index}.description`}
                  control={control}
                  render={({ field: ticketDescriptionField }) => (
                    <FormItem>
                      <FormLabel>توضیحات</FormLabel>
                      <FormControl className="mt-2">
                        <Textarea
                          className="min-h-32 resize-none"
                          placeholder="توضیحاتی بنویسید..."
                          {...ticketDescriptionField}
                        />
                      </FormControl>
                      <FormDescription>توضیحاتی برای این بخش بنویسید</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  name={`tickets.${index}.capacity`}
                  control={control}
                  render={({ field: ticketCapacityField }) => (
                    <FormItem>
                      <FormLabel>ظرفیت</FormLabel>
                      <FormControl className="mt-2">
                        <Input
                          min={1}
                          type="string"
                          placeholder="تعداد شرکت‌کنندگان"
                          {...ticketCapacityField}
                        />
                      </FormControl>
                      <FormDescription>حداکثر ظرفیت شرکت‌کنندگان</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`tickets.${index}.price`}
                  control={control}
                  render={({ field: ticketPriceField }) => (
                    <FormItem>
                      <FormLabel>قیمت (تومان)</FormLabel>
                      <FormControl className="mt-2">
                        <Input
                          min={0}
                          type="number"
                          placeholder="مثال: 100000"
                          {...ticketPriceField}
                        />
                      </FormControl>
                      <FormDescription>
                        قیمت بلیت (اگر رایگان است عدد ۰ را وارد کنید)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex justify-center gap-4">
          <Button asChild size="lg" variant="outline">
            <Link href="/dashboard/tickets">انصراف</Link>
          </Button>
          <Button size="lg" disabled={isLoading} type="submit">
            {isLoading ? "در حال ایجاد..." : " ادامه ایجاد رویداد"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
