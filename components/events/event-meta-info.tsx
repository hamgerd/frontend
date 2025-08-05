import moment from "jalali-moment";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

interface EventMetaInfoProps {
  startDate: Date;
  endDate: Date;
  location: string | null | undefined;
  maxParticipants: number;
}

export default function EventMetaInfo({
  startDate,
  endDate,
  location,
  maxParticipants,
}: EventMetaInfoProps) {
  return (
    <div className="text-muted-foreground mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex items-center gap-2">
        <CalendarDays className="h-5 w-5" />
        <span>شروع {moment(startDate).locale("fa").format("YYYY/MM/DD HH:mm")}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5" />
        <span>
          زمان برگزاری {moment(startDate).locale("fa").format("HH:mm")} تا{" "}
          {moment(endDate).locale("fa").format("HH:mm")}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5" />
        <span>ظرفیت {maxParticipants}</span>
      </div>
    </div>
  );
}
