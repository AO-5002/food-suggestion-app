import OnboardLayout from "@/layouts/OnboardLayout";
import React from "react";
import { Subgroup } from "./subgroup";
import { DisplayQuestion } from "./dynamic-components";

function page() {
  return (
    <OnboardLayout questionPrompt={<Subgroup />}>
      <DisplayQuestion />
    </OnboardLayout>
  );
}

export default page;
