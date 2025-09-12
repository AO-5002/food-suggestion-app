"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

// -------------------- Types --------------------

type QuestionObject = {
  questionPrompt: string;
  answers?: string[];
  skip: boolean;
  isInput: boolean;
};

// -------------------- Mock Data --------------------

const questionData: QuestionObject[] = [
  {
    questionPrompt: "What is 2 + 2?",
    answers: ["2", "3", "4", "5"],
    skip: true,
    isInput: false,
  },
  {
    questionPrompt: "Enter your name:",
    skip: false,
    isInput: true,
  },
];

// -------------------- Question Components --------------------

function FormField({ options }: { options: string[] }) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      {options.map((item, i) => (
        <Button className="w-full h-[80px] flex justify-start" key={i}>
          {item}
        </Button>
      ))}
    </div>
  );
}

function AnswerChoiceField() {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <Input placeholder="Type your answer..." />
    </div>
  );
}

// -------------------- Navigation Buttons --------------------

function NextBtn({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} className="h-[50px] w-[100px]">
      Next
    </Button>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} className="h-[50px] w-[100px]">
      Back
    </Button>
  );
}

function SkipBtn({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      className="bg-white text-black h-[50px] w-[100px] border border-zinc-200"
    >
      Skip
    </Button>
  );
}

// -------------------- DisplayQuestion --------------------

function DisplayQuestion() {
  const router = useRouter(); // ✅ put it here
  const [index, setIndex] = useState(0);
  const currentQuestion = questionData[index];

  const goNext = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
    } else {
      router.push("/dashboard/1"); // ✅ works now
    }
  };

  const goBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const skip = () => {
    goNext();
  };

  return (
    <div className="w-full h-full flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-2xl border-b w-full font-light mb-8">
          {currentQuestion.questionPrompt}
        </h1>

        {currentQuestion.isInput ? (
          <AnswerChoiceField />
        ) : (
          <FormField options={currentQuestion.answers ?? []} />
        )}
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        <BackBtn onClick={goBack} />
        <div className="flex gap-4">
          {currentQuestion.skip && <SkipBtn onClick={skip} />}
          <NextBtn onClick={goNext} />
        </div>
      </div>
    </div>
  );
}

export { DisplayQuestion };
