import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OrganizationCard({ organization }) {
  return (
    <Card key={organization.public_id} className="overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 bg-muted">
          <Image
            src={organization.logo || "/placeholder.svg"}
            alt={organization.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold text-xl text-center">{organization.name}</h3>
          {organization.verified && (
            <Badge variant="outline" className="bg-primary/10 text-primary">
              تایید شده
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span>{organization.address}</span>
        </div>
        <p className="text-muted-foreground text-sm text-center line-clamp-2 mb-4">
          {organization.description}
        </p>
        <div className="flex justify-between w-full mb-4">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
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
