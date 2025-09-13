import PageLayout from "@/layouts/PageLayout";
import React from "react";
import { CardList } from "./static-components";
function page() {
  return (
    <PageLayout>
      <div className="w-full h-full border rounded-lg p-4">
        <CardList />
      </div>
    </PageLayout>
  );
}

export default page;
