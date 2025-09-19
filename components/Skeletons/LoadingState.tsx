import React from "react";
import { Skeleton } from "../ui/skeleton";
import PageLayout from "@/layouts/PageLayout";
import ItemLoading from "./ItemLoading";

function LoadingState() {
  return (
    <div className="h-[600px] w-full overflow-auto p-2 flex flex-col items-center gap-8">
      <ItemLoading />
    </div>
  );
}

export default LoadingState;
