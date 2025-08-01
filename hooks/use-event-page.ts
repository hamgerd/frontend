import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import type { Event } from "@/models/event";
import type { PatchedTicket } from "@/models/patched-ticket";
import type { Speaker } from "@/models/speaker";
import type { TicketCreateResponse } from "@/models/ticket-create-response";

import api from "@/lib/axios";

export default function useEventPage() {
  const params = useParams();
  const [eventDetails, setEventDetails] = useState<Event>();
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [ticketType, setTicketType] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [transactionsId, setTransactionsId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  useEffect(() => {
    if (!params.id) return;
    const fetchData = async () => {
      try {
        const [eventRes, speakerRes] = await Promise.all([
          api.get<Event>(`/api/v1/events/${params.id}/`),
          api.get(`/api/v1/events/${params.id}/speakers/`),
        ]);
        setEventDetails(eventRes.data);
        setSpeakers(speakerRes.data.results);
        setTicketType(eventRes.data.ticket_types[0].public_id);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };
    fetchData();
  }, [params.id]);

  const handleTicket = async (ticketId: string) => {
    try {
      await api.patch<PatchedTicket>(`/api/v1/events/${params.id}/tickets/${ticketId}/`, {
        notes: "IDK",
      });
    } catch (err) {
      console.log("Patch error:", err);
    }
  };

  const createTicket = async () => {
    try {
      const res = await api.post<TicketCreateResponse>(
        `/api/v1/events/${params.id}/tickets/create_by_type/`,
        [{ ticket_type_public_id: ticketType, count: 1 }]
      );
      const data = res.data;
      const id = data.ticket_data[0].ticket_public_ids[0];
      setTicketId(id);
      setTransactionsId(data.transaction_public_id);
      await handleTicket(id);
      setShowConfirmationDialog(true);
    } catch (err) {
      console.log("Ticket creation error:", err);
      return redirect("/login");
    }
  };

  const startPayment = async () => {
    setIsLoading(true);
    try {
      const res = await api.post(`api/v1/payment/pay/${transactionsId}/`);
      if (res.data.url) {
        window.location.href = res.data.url;
      } else if (res.data.status === "s") {
        return redirect("/dashboard/tickets");
      }
    } catch (err) {
      console.log("Payment error:", err);
    }
  };

  return {
    eventDetails,
    speakers,
    isLoading,
    showConfirmationDialog,
    setShowConfirmationDialog,
    createTicket,
    startPayment,
  };
}
