import { Globe, Mail } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Organizer {
  logo?: string;
  name: string;
  username: string;
  email?: string;
  website?: string;
  description?: string;
}

interface EventOrganizerCardProps {
  organization: Organizer;
}

export default function EventOrganizerCard({ organization }: EventOrganizerCardProps) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>برگزارکننده</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 static z-1">
          <Avatar className="h-12 w-12">
            <AvatarImage src={organization.logo ?? "/placeholder.svg"} />
            <AvatarFallback>{organization.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold">{organization.name}</h3>
            <Link
              className="text-sm text-primary hover:underline"
              href={`/organizations/${organization.username}`}
            >
              مشاهده پروفایل
            </Link>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center">{organization.description}</p>
        <Separator />
        <div dir="ltr" className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{organization.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{organization.website}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
