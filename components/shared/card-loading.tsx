import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function CardLoading() {
  return Array(6)
    .fill(0)
    .map((_, index) => (
      <Card className="overflow-hidden" key={`loading-${index}`}>
        <div className="relative h-48 bg-muted animate-pulse"></div>
        <CardContent className="p-6">
          <div className="h-6 w-3/4 bg-muted animate-pulse mb-2"></div>
          <div className="h-4 w-1/2 bg-muted animate-pulse mb-2"></div>
          <div className="h-4 w-2/3 bg-muted animate-pulse mb-2"></div>
          <div className="h-4 w-1/2 bg-muted animate-pulse"></div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="h-10 w-full bg-muted animate-pulse"></div>
        </CardFooter>
      </Card>
    ));
}
