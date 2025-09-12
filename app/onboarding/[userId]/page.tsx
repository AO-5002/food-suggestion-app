import OnboardLayout from "@/layouts/OnboardLayout";
import React from "react";
import { DisplayQuestion } from "./dynamic-components";

function page() {
  return (
    <OnboardLayout>
      <DisplayQuestion />
    </OnboardLayout>
  );
}

export default page;
