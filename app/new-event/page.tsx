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

  const form = useForm<z.infer<typeof newEventSchema>>({
    resolver: zodResolver(newEventSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      start_date: "",
      end_date: "",
      startTime: "",
      endTime: "",
      location: "",
      address: "",
      tickets: [{ title: "", description: "", capacity: 100, price: 0 }],
    },
  });

  function onSubmit(values: z.infer<typeof newEventSchema>) {
    setIsLoading(true);
    try {
      api.post("api/v1/events/", {
        title: values.title,
        description: values.description,
        organization: values.organization,
        category: values.category,
        start_date: values.start_date,
        end_date: values.end_date,
        startTime: values.startTime,
        endTime: values.endTime,
        location: values.location,
        address: values.address,
        ticket_types: values.tickets.map(ticket => ({
          title: ticket.title,
          description: ticket.description,
          max_participants: ticket.capacity,
          price: ticket.price,
        })),
      });
      toast({
        title: "رویداد با موفقیت ایجاد شد",
        description: "رویداد شما ایجاد شد و برای بررسی ارسال شد.",
        variant: "default",
      });
      form.reset();
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
        <NewEventForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
