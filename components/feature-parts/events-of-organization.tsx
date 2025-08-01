import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function eventsOfOrganization() {
  const organization = {
    verified: true,
    team: [
      {
        name: "علی محمدی",
        role: "مدیرعامل",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "سارا احمدی",
        role: "مدیر فنی",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "محمد حسینی",
        role: "مدیر آموزش",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    upcomingEvents: [
      {
        id: 1,
        title: "کنفرانس فناوری‌های نوین وب",
        date: "۱۵ مرداد ۱۴۰۲",
        time: "۰۹:۰۰ - ۱۷:۰۰",
        location: "تهران، سالن همایش‌های برج میلاد",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    pastEvents: [
      {
        id: 6,
        title: "دوره آموزشی فرانت‌اند",
        date: "۵ اسفند ۱۴۰۱",
        location: "تهران، مرکز نوآوری",
        attendees: 80,
      },
    ],
  };
  return (
    <>
      <h3 className="text-lg font-bold mb-4">رویدادهای آینده</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {organization.upcomingEvents.map(event => (
          <Card className="overflow-hidden" key={event.id}>
            <div className="relative h-40">
              <Image
                fill
                alt={event.title}
                className="object-cover"
                src={event.image || "/placeholder.svg"}
              />
            </div>
            <CardContent className="p-4">
              <h4 className="font-bold mb-2 line-clamp-1">{event.title}</h4>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <Calendar className="h-3 w-3" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <Clock className="h-3 w-3" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-3 w-3" />
                <span>{event.location}</span>
              </div>
              <Button asChild size="sm" className="w-full mt-3" variant="outline">
                <Link href={`/events/${event.id}`}>مشاهده جزئیات</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="text-lg font-bold mb-4">رویدادهای گذشته</h3>
      <div className="space-y-4">
        {organization.pastEvents.map(event => (
          <Card key={event.id}>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold">{event.title}</h4>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees} شرکت‌کننده</span>
                  </div>
                </div>
              </div>
              <Button asChild size="sm" variant="outline">
                <Link href={`/events/${event.id}`}>مشاهده</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
