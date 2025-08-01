"use client";

import type * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import NewEventForm from "@/components/feature-parts/new-event-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { newEventSchema } from "@/validator/new-event-schema";

export default function NewEventPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof newEventSchema>>({
    resolver: zodResolver(newEventSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      location: "",
      address: "",
      capacity: "",
      price: "",
      organizerName: "",
      organizerEmail: "",
      organizerPhone: "",
    },
  });

  function onSubmit(values: z.infer<typeof newEventSchema>) {
    setIsLoading(true);

    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
      toast({
        title: "رویداد با موفقیت ایجاد شد",
        description: "رویداد شما ایجاد شد و برای بررسی ارسال شد.",
      });
    }, 1000);
  }

  return (
    <div className="container py-10 mx-auto">
      <div className="mx-6">
        <div className="flex items-center mb-6">
          <Button asChild size="sm" variant="outline">
            <Link href="/dashboard/tickets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به داشبورد
            </Link>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">ایجاد رویداد جدید</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            اطلاعات رویداد خود را وارد کنید تا آن را برای شرکت‌کنندگان منتشر کنیم
          </p>
        </div>
        <NewEventForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
