import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Frown } from "lucide-react";

function ItemLoading() {
  return (
    <Skeleton className="w-full h-[400px] shrink-0 flex items-center justify-center">
      <Frown height={64} width={64} />
    </Skeleton>
  );
}

export default ItemLoading;
