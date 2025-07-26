"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Clock, Globe, Mail, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Event } from "@/models/event";
import { Speaker } from "@/models/speaker";
import { PatchedTicket } from "@/models/patched-ticket";
import moment from "jalali-moment";
import { redirect, useParams } from "next/navigation";
import { TicketCreateResponse } from "@/models/ticket-create-response";
import EventTabs from "@/components/events/event-tabs";
import PaymentConfirm from "@/components/payment/payment-confirm";

export default function EventPage() {
  const params = useParams();
  const [eventDetails, setEventDetails] = useState<Event>();
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [ticketType, setTicketType] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [transactionsId, setTransactionsId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function handleTicket() {
    const patchTicketId = async () => {
      try {
        const ticketResponse = await api.patch<PatchedTicket>(
          `/api/v1/events/${params.id}/tickets/${ticketId}/`,
          {
            notes: "IDK",
          }
        );
      } catch (error) {
        console.log("error message is: " + error);
      }
    };
    patchTicketId();
  }

  function createTicket() {
    const postTicketId = async () => {
      try {
        const ticketTypeResponse = await api.post<TicketCreateResponse>(
          `/api/v1/events/${params.id}/tickets/create_by_type/`,
          [
            {
              ticket_type_public_id: `${ticketType}`,
              count: 1,
            },
          ]
        );
        const data = ticketTypeResponse.data;
        setTicketId(data.ticket_data[0].ticket_public_ids[0]);
        setTransactionsId(data.transaction_public_id);
        handleTicket();
        setShowConfirmationDialog(true);
      } catch (error) {
        console.log("error message is: " + error);
        return redirect("/login");
      }
    };
    postTicketId();
  }

  function startTransactionPayment() {
    const postTransactionId = async () => {
      setIsLoading(true);
      try {
        const transactionResponse = await api.post(`api/v1/payment/pay/${transactionsId}/`);
        console.log(transactionResponse.data);
        if (transactionResponse.data.url) {
          window.location.href = transactionResponse.data.url;
        }
      } catch (error) {
        console.log("error message is: " + error);
      }
    };
    postTransactionId();
  }

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const res = await api.get<Event>(`/api/v1/events/${params.id}/`);
        const speakersRes = await api.get(`/api/v1/events/${params.id}/speakers/`);
        setEventDetails(res.data);
        setSpeakers(speakersRes.data.results);
        setTicketType(res.data.ticket_types[0].public_id);
      } catch (error) {
        console.log("error message is: " + error);
      }
    };

    if (params?.id) {
      fetchEventDetails();
    }
  }, [params?.id]);

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
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-100 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-lg">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden mb-6">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  <span>
                    شروع {moment(eventDetails.start_date).locale("fa").format("YYYY/MM/DD HH:mm")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>
                    زمان برگزاری {moment(eventDetails.start_date).locale("fa").format("HH:mm")} تا{" "}
                    {moment(eventDetails.end_date).locale("fa").format("HH:mm")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{eventDetails.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>ظرفیت {eventDetails.max_participants} </span>
                </div>
              </div>

              <EventTabs speakers={speakers} eventDetails={eventDetails} />
            </div>

            <div>
              <Card className="sticky top-20 z-10">
                <CardHeader>
                  <CardTitle>ثبت‌نام در رویداد</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between py-2">
                    <span className="font-medium">قیمت:</span>
                    <span>{eventDetails.ticket_types[0]?.price.toLocaleString()} تومان</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">ظرفیت :</span>
                    <span>{eventDetails.ticket_types[0].max_participants} نفر</span>
                  </div>
                  <Button className="w-full" size="lg" onClick={createTicket}>
                    ثبت‌نام در رویداد
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>برگزارکننده</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 static z-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={eventDetails.organization.logo || "/placeholder.svg"} />
                      <AvatarFallback>{eventDetails.organization?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{eventDetails.organization?.name}</h3>
                      <Link
                        href={`/organizations/${eventDetails.organization?.username}`}
                        className="text-sm text-primary hover:underline"
                      >
                        مشاهده پروفایل
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {eventDetails.organization?.description}
                  </p>
                  <Separator />
                  <div className="space-y-2" dir="ltr">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{eventDetails.organization?.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{eventDetails.organization?.website}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <PaymentConfirm
        ticketName={eventDetails.title}
        ticketPrice={eventDetails.ticket_types[0].price.toLocaleString()}
        open={showConfirmationDialog}
        onCancel={() => setShowConfirmationDialog(false)}
        onConfirm={() => {
          setShowConfirmationDialog(false);
          startTransactionPayment();
        }}
      />
    </div>
  );
}
