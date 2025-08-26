"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Event } from "@/models/event";

import { SiteHeader } from "@/components/dashboard/site-header";
import EventCard from "@/components/events/event-card";
import { AppSidebar } from "@/components/shared/app-sidebar";
import CardLoading from "@/components/shared/card-loading";
import PaginationSection from "@/components/shared/pagination";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import api from "@/lib/axios";

export default function MayEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  useEffect(() => {
    const fetchEventData = async () => {
      setIsLoading(true);
      try {
        const userEventResponse = await api.get("/api/v1/events/me/");
        if (userEventResponse.data) {
          setEvents(userEventResponse.data.results);
          setTotalPages(Math.ceil(userEventResponse.data.count / 24));
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
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="w-full max-w-full overflow-x-hidden">
        <SiteHeader title="رویداد های من " />

        {isLoading ? (
          <div className="mx-6 mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardLoading />
          </div>
        ) : events.length > 0 ? (
          <>
            <div className="mx-6 mt-10 mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {events.map(event => (
                <EventCard event={event} key={event.public_id} TrashOption />
              ))}
            </div>
            <PaginationSection page={page} setPage={setPage} totalPages={totalPages} />
          </>
        ) : (
          <div className="col-span-full mt-20 flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground mb-4 text-xl">هیچ رویدادی یافت نشد</p>
            <Button asChild>
              <Link href="/new-event">ایجاد رویداد جدید</Link>
            </Button>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
