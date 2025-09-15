import { Skeleton } from "../ui/skeleton";

function ItemDetailsSkeleton() {
  return (
    <div>
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}

export default ItemDetailsSkeleton;
