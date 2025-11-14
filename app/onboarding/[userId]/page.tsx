"use client";

import OnboardLayout from "@/layouts/OnboardLayout";
import React, { useState } from "react";
import {
  DisplayQuestion,
  questionData,
  type OnboardingData,
} from "./dynamic-components";
import { DynamicSubgroup } from "./subgroup-dynamic";

function OnboardingPage() {
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>(
    {}
  );

  const handleUpdate = (data: Partial<OnboardingData>) => {
    setOnboardingData((prev) => ({ ...prev, ...data }));
  };

  const completedQuestions = Object.keys(onboardingData).filter(
    (key) => onboardingData[key as keyof OnboardingData]
  );

  return (
    <OnboardLayout
      questionPrompt={
        <DynamicSubgroup
          completedQuestions={completedQuestions}
          allQuestions={questionData}
        />
      }
    >
      <DisplayQuestion onUpdate={handleUpdate} />
    </OnboardLayout>
  );
}

export default OnboardingPage;
