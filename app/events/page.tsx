"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Event } from "@/models/event";

import EventCard from "@/components/events/event-card";
import CardLoading from "@/components/shared/card-loading";
import CreatePromptCard from "@/components/shared/create-prompt-card";
import PaginationSection from "@/components/shared/pagination";
import Searchbar from "@/components/shared/searchbar";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchEventData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/api/v1/events/", {
          params: {
            page,
          },
        });
        if (response.data) {
          setEvents(response.data.results);
          setTotalPages(Math.ceil(response.data.count / 25));
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, [page]);
  return (
    <div className="container flex mx-auto flex-col py-10">
      <div className="mx-4">
        <div className="flex flex-col items-center gap-4 text-center mb-10 ">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">رویدادها</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            تمام رویدادهای در حال برگزاری را مشاهده و در آن‌ها شرکت کنید
          </p>
        </div>
        <Searchbar />
      </div>
      {/* Events Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-6 gap-6 mb-10">
          <CardLoading />
        </div>
      ) : events.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-6 gap-6 mb-10">
            {events.map(event => (
              <EventCard event={event} key={event.public_id} />
            ))}
          </div>
          <PaginationSection page={page} setPage={setPage} totalPages={totalPages} />
        </>
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <p className="text-xl text-muted-foreground mb-4">هیچ رویدادی یافت نشد</p>
          <Button asChild>
            <Link href="/new-event">ایجاد رویداد جدید</Link>
          </Button>
        </div>
      )}
      <CreatePromptCard
        title="می‌خواهید رویداد خود را ایجاد کنید؟"
        buttonHref="/new-event"
        buttonText="ایجاد رویداد جدید"
        description="به سادگی می‌توانید رویداد خود را ایجاد کرده و مدیریت کنید"
      />
    </div>
  );
}
