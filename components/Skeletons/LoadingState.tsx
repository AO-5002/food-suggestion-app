import React from "react";
import { Skeleton } from "../ui/skeleton";
import PageLayout from "@/layouts/PageLayout";

function LoadingState() {
  return (
    <PageLayout>
      <Skeleton className="h-8 w-16" />
    </PageLayout>
  );
}

export default LoadingState;
