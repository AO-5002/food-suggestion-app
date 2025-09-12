import PageLayout from "@/layouts/PageLayout";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./dynamic-components";
import React from "react";

function page() {
  return (
    <PageLayout>
      <div className="w-full h-full  border rounded-lg p-4">
        <ScrollArea className="h-[600px] w-full overflow-auto p-2 flex flex-col items-center gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollArea>
      </div>
    </PageLayout>
  );
}

export default page;
