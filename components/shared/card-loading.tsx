import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function CardLoading() {
  return Array(6)
    .fill(0)
    .map((_, index) => (
      <Card className="overflow-hidden" key={`loading-${String(index)}`}>
        <div className="bg-muted relative h-48 animate-pulse"></div>
        <CardContent className="p-6">
          <div className="bg-muted mb-2 h-6 w-3/4 animate-pulse"></div>
          <div className="bg-muted mb-2 h-4 w-1/2 animate-pulse"></div>
          <div className="bg-muted mb-2 h-4 w-2/3 animate-pulse"></div>
          <div className="bg-muted h-4 w-1/2 animate-pulse"></div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="bg-muted h-10 w-full animate-pulse"></div>
        </CardFooter>
      </Card>
    ));
}
