"use client";

import type * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import NewEventForm from "@/components/feature-parts/new-event-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/axios";
import { newEventSchema } from "@/validator/new-event-schema";

export default function NewEventPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  function combineDateAndTime(date: Date, time: string): string {
    if (!date || !time) return "";
    const d = new Date(date);
    const [hours, minutes] = time.split(":").map(Number);
    d.setHours(hours, minutes, 0, 0);
    return d.toISOString();
  }

  const form = useForm<z.infer<typeof newEventSchema>>({
    resolver: zodResolver(newEventSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      start_date: undefined,
      end_date: undefined,
      location: "",
      tickets: [{ title: "", description: "", capacity: "", price: "" }],
    },
  });

  async function onSubmit(values: z.infer<typeof newEventSchema>) {
    setIsLoading(true);
    try {
      const createEventResponse = await api.post("api/v1/events/", {
        title: values.title,
        description: values.description,
        organization: values.organization,
        category: values.category,
        start_date: combineDateAndTime(values.start_date, values.startTime),
        end_date: combineDateAndTime(values.end_date, values.endTime),
        location: values.location,
        ticket_types: values.tickets.map(ticket => ({
          title: ticket.title,
          description: ticket.description,
          max_participants: Number(ticket.capacity),
          price: ticket.price,
        })),
      });
      toast({
        title: "رویداد با موفقیت ایجاد شد",
        description: "رویداد شما ایجاد شد و برای بررسی ارسال شد.",
        variant: "default",
      });
      form.reset();
      router.push(
        `/new-event/continue?public_id=${createEventResponse.data.public_id}&organizationUsername=${createEventResponse.data.organization}`
      );
    } catch (error) {
      console.log("Form erro is:", error);
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
  });
  return (
    <div className="container mx-auto py-10">
      <div className="mx-6">
        <div className="mb-6 flex items-center">
          <Button asChild size="sm" variant="outline">
            <Link href="/dashboard/tickets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به داشبورد
            </Link>
          </Button>
        </div>

        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">ایجاد رویداد جدید</h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            اطلاعات رویداد خود را وارد کنید تا آن را برای شرکت‌کنندگان منتشر کنیم
          </p>
        </div>
        <div className="mb-10 text-red-500 underline">
          توجه: برای ایجاد رویداد باید حتما باید سازمان ساخته شده داشته باشید{" "}
        </div>
        <NewEventForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
