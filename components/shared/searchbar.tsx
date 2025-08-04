import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Searchbar() {
  return (
    <div className=" mb-10">
      <div className="md:col-span-2 relative">
        <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input className="pr-10" placeholder="جستجوی رویداد..." />
      </div>
    </div>
  );
}
