"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Event } from "@/models/event";

import EventCard from "@/components/events/event-card";
import CardLoading from "@/components/shared/card-loading";
import CreatePromptCard from "@/components/shared/create-prompt-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/lib/axios";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/api/v1/events/");
        if (response.data) {
          setEvents(response.data.results);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchEventData();
  }, []);
  return (
    <div className="container flex mx-auto flex-col py-10">
      <div className="mx-4">
        <div className="flex flex-col items-center gap-4 text-center mb-10 ">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">رویدادها</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            تمام رویدادهای در حال برگزاری را مشاهده و در آن‌ها شرکت کنید
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="md:col-span-2 relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            {/* FIXME */}
            <Input className="pr-10" placeholder="جستجوی رویداد..." />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="technology">فناوری</SelectItem>
                <SelectItem value="business">کسب و کار</SelectItem>
                <SelectItem value="education">آموزشی</SelectItem>
                <SelectItem value="design">طراحی</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="تاریخ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="upcoming">پیش رو</SelectItem>
                <SelectItem value="thisWeek">این هفته</SelectItem>
                <SelectItem value="thisMonth">این ماه</SelectItem>
                <SelectItem value="past">گذشته</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>{" "}
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-6 gap-6 mb-10">
        {isLoading ? (
          <CardLoading />
        ) : events.length > 0 ? (
          events.map(event => <EventCard event={event} key={event.public_id} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <p className="text-xl text-muted-foreground mb-4">هیچ رویدادی یافت نشد</p>
            <Button asChild>
              <Link href="/new-event">ایجاد رویداد جدید</Link>
            </Button>
          </div>
        )}
      </div>
      <div className="flex justify-center my-8">
        {/* FIXME */}
        {/* <div className="flex space-x-1 space-x-reverse">
          <Button variant="outline" size="icon">
            <span className="sr-only">صفحه قبل</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm">
            ۱
          </Button>
          <Button variant="outline" size="sm">
            ۲
          </Button>
          <Button variant="outline" size="sm" className="bg-muted">
            ۳
          </Button>
          <Button variant="outline" size="sm">
            ۴
          </Button>
          <Button variant="outline" size="sm">
            ۵
          </Button>
          <Button variant="outline" size="icon">
            <span className="sr-only">صفحه بعد</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
        </div> */}
      </div>
      <CreatePromptCard
        title="می‌خواهید رویداد خود را ایجاد کنید؟"
        buttonHref="/new-event"
        buttonText="ایجاد رویداد جدید"
        description="به سادگی می‌توانید رویداد خود را ایجاد کرده و مدیریت کنید"
      />
    </div>
  );
}
