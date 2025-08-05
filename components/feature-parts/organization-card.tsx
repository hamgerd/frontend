import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Organization } from "@/models/organization";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

interface OrganizationCardProps {
  organization: Organization;
}

export default function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <Card className="overflow-hidden" key={organization.public_id}>
      <div className="flex flex-col items-center p-6">
        <div className="bg-muted relative mb-4 h-24 w-24 overflow-hidden rounded-full">
          <Image
            fill
            alt={organization.name}
            className="object-cover"
            src={organization.logo ?? "/placeholder.svg"}
          />
        </div>
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-center text-xl font-bold">{organization.name}</h3>
          <Badge className="bg-primary/10 text-primary" variant="outline">
            تایید شده
          </Badge>
        </div>
        <div className="text-muted-foreground mb-2 flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{organization.address}</span>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2 text-center text-sm">
          {organization.description}
        </p>
        <div className="mb-4 flex w-full justify-between">
          <div className="text-muted-foreground flex items-start gap-1 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{organization.event_count} رویداد</span>
          </div>
        </div>
      </div>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/organizations/${organization.username}`}>
            مشاهده پروفایل
            <ArrowRight className="mr-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
