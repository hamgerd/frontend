"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  CalendarDays,
  Clock,
  Globe,
  Mail,
  MapPin,
  Share2,
  User,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Event } from "@/models/event";

import { useParams } from "next/navigation";

export default function EventPage() {
  const params = useParams();
  const [eventDetails, setEventDetails] = useState<Event>();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const res = await api.get(`/api/v1/events/${params.id}/`);
        setEventDetails(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (params?.id) {
      fetchEventDetails();
    }
  }, [params?.id]);
  // Add a loading state while event details are being fetched
  if (!eventDetails) {
    return (
      <div className="container flex lg:mx-auto flex-col py-10">
        <div className="mx-4">
          <div className="flex items-center mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                بازگشت به رویدادها
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center h-64">
            <p>در حال بارگذاری اطلاعات رویداد...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex lg:mx-auto flex-col py-10">
      <div className="mx-4">
        <div className="flex items-center mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به رویدادها
            </Link>
          </Button>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              اشتراک‌گذاری
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="relative  h-72 sm:h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src={eventDetails.image || "/placeholder.svg"}
                alt={eventDetails.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md">
                {eventDetails.category || null}
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">{eventDetails.title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-5 w-5" />
                <span>{eventDetails.start_date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>
                  {eventDetails.start_date} تا {eventDetails.end_date}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{eventDetails.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>
                  {eventDetails.max_participants} از {} شرکت‌کننده
                </span>
              </div>
            </div>

            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">درباره</TabsTrigger>
                <TabsTrigger value="schedule">برنامه زمانی</TabsTrigger>
                <TabsTrigger value="speakers">سخنرانان</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-6">
                <p className="mb-6 whitespace-pre-line">
                  {eventDetails.description}
                </p>

                <h3 className="text-lg font-bold mb-2">محل برگزاری</h3>
                <p className="mb-6">{eventDetails.location}</p>

                <div className="rounded-lg overflow-hidden h-64 bg-muted">
                  {/* Google Map would go here in a real application */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    نقشه محل برگزاری
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="schedule" className="mt-6">
                <div className="space-y-6">
                  {/* {eventDetails.schedule.map((item, index) => (
                    <div key={index} className="relative pr-10 pb-6 border-r">
                      <div className="absolute right-[-8px] top-2 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="mb-1 font-medium">{item.time}</div>
                      <div className="font-bold text-lg mb-1">{item.title}</div>
                      <div className="text-muted-foreground">
                        {item.description}
                      </div>
                      {item.speaker && (
                        <Badge variant="outline" className="mt-2">
                          <User className="mr-1 h-3 w-3" />
                          {item.speaker}
                        </Badge>
                      )}
                    </div>
                  ))} */}
                </div>
              </TabsContent>
              <TabsContent value="speakers" className="mt-6">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {eventDetails.speakers.map((speaker) => (
                    <Card key={speaker.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage
                              src={speaker.image || "/placeholder.svg"}
                              alt={speaker.name}
                            />
                            <AvatarFallback>
                              {speaker.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-bold">
                              {speaker.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {speaker.role}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{speaker.topic}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{speaker.time}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div> */}
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>ثبت‌نام در رویداد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-2">
                  <span className="font-medium">قیمت:</span>
                  <span>{eventDetails.price}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">ظرفیت باقیمانده:</span>
                  <span>
                    {eventDetails.capacity - eventDetails.attendees} نفر
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  ثبت‌نام در رویداد
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>برگزارکننده</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={
                        eventDetails.organization.image || "/placeholder.svg"
                      }
                      alt={eventDetails.organization?.name}
                    />
                    <AvatarFallback>
                      {eventDetails.organization?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">
                      {eventDetails.organization?.name}
                    </h3>
                    <Link
                      href={`/organizations/${eventDetails.organization?.id}`}
                      className="text-sm text-primary hover:underline"
                    >
                      مشاهده پروفایل
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {eventDetails.organization?.description}
                </p>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {eventDetails.organization?.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {eventDetails.organization?.website}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
