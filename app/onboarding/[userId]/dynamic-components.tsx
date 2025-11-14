"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

// -------------------- Types --------------------

type QuestionObject = {
  id: string;
  questionPrompt: string;
  answers?: string[];
  skip: boolean;
  isInput: boolean;
  allowMultiple?: boolean;
  inputType?: string;
};

type OnboardingData = {
  cooking_ability: string;
  cultural_dishes: string;
  cooking_time: string;
  allergies: string;
  diets: string;
  quantity: string;
  budget_range: string;
};

// -------------------- Question Data --------------------

const questionData: QuestionObject[] = [
  {
    id: "cooking_ability",
    questionPrompt: "What's your cooking skill level?",
    answers: ["beginner", "intermediate", "advanced"],
    skip: false,
    isInput: false,
  },
  {
    id: "cultural_dishes",
    questionPrompt: "Which cuisines do you enjoy? (Select multiple)",
    answers: [
      "mexican",
      "indian",
      "korean",
      "italian",
      "chinese",
      "japanese",
      "thai",
      "spanish",
      "mediterranean",
    ],
    skip: false,
    isInput: false,
    allowMultiple: true,
  },
  {
    id: "cooking_time",
    questionPrompt: "How much time do you have to cook?",
    answers: [
      "quick (10min at most)",
      "moderate (10-30min)",
      "long (30min+)",
      "any",
    ],
    skip: false,
    isInput: false,
  },
  {
    id: "allergies",
    questionPrompt: "Do you have any allergies? (Select all that apply)",
    answers: [
      "none",
      "gluten",
      "nuts",
      "dairy",
      "shellfish",
      "soy",
      "eggs",
      "fish",
    ],
    skip: true,
    isInput: false,
    allowMultiple: true,
  },
  {
    id: "diets",
    questionPrompt: "Any dietary preferences? (Select all that apply)",
    answers: [
      "none",
      "vegan",
      "vegetarian",
      "keto",
      "halal",
      "kosher",
      "paleo",
      "gluten-free",
    ],
    skip: true,
    isInput: false,
    allowMultiple: true,
  },
  {
    id: "quantity",
    questionPrompt: "How many servings do you need?",
    skip: false,
    isInput: true,
    inputType: "number",
  },
  {
    id: "budget_range",
    questionPrompt: "What's your budget range? (e.g., 20,100 for min,max)",
    skip: false,
    isInput: true,
    inputType: "text",
  },
];

// -------------------- Question Components --------------------

interface FormFieldProps {
  options: string[];
  selected: string[];
  onSelect: (option: string) => void;
  allowMultiple?: boolean;
}

function FormField({
  options,
  selected,
  onSelect,
  allowMultiple = false,
}: FormFieldProps) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      {options.map((item, i) => (
        <QuestionChoice
          key={i}
          option={item}
          isSelected={selected.includes(item)}
          onClick={() => onSelect(item)}
          allowMultiple={allowMultiple}
        />
      ))}
    </div>
  );
}

interface QuestionChoiceProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
  allowMultiple?: boolean;
}

function QuestionChoice({
  option,
  isSelected,
  onClick,
  allowMultiple,
}: QuestionChoiceProps) {
  return (
    <Button
      onClick={onClick}
      variant={isSelected ? "default" : "outline"}
      className="w-full h-[80px] flex justify-start capitalize"
    >
      {allowMultiple && <span className="mr-2">{isSelected ? "✓" : "○"}</span>}
      {option}
    </Button>
  );
}

interface AnswerChoiceFieldProps {
  value: string;
  onChange: (value: string) => void;
  inputType?: string;
}

function AnswerChoiceField({
  value,
  onChange,
  inputType = "text",
}: AnswerChoiceFieldProps) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <Input
        type={inputType}
        placeholder={
          inputType === "number" ? "Enter number..." : "Type your answer..."
        }
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={inputType === "number" ? "1" : undefined}
      />
    </div>
  );
}

// -------------------- Navigation Buttons --------------------

function NextBtn({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className="h-[50px] w-[100px]"
    >
      Next
    </Button>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" className="h-[50px] w-[100px]">
      Back
    </Button>
  );
}

function SkipBtn({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      className="h-[50px] w-[100px]"
    >
      Skip
    </Button>
  );
}

function SubmitBtn({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} className="h-[50px] w-[100px]">
      Submit
    </Button>
  );
}

// -------------------- DisplayQuestion --------------------

interface DisplayQuestionProps {
  onUpdate: (data: Partial<OnboardingData>) => void;
}

function DisplayQuestion({ onUpdate }: DisplayQuestionProps) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, string[]>>({});
  const [inputValue, setInputValue] = useState("");

  const currentQuestion = questionData[index];
  const currentResponses = responses[currentQuestion.id] || [];

  const handleSelect = (option: string) => {
    const questionId = currentQuestion.id;

    if (currentQuestion.allowMultiple) {
      const newResponses = currentResponses.includes(option)
        ? currentResponses.filter((r) => r !== option)
        : [...currentResponses, option];

      setResponses({ ...responses, [questionId]: newResponses });
      onUpdate({
        [questionId]: newResponses.join(", "),
      } as Partial<OnboardingData>);
    } else {
      setResponses({ ...responses, [questionId]: [option] });
      onUpdate({ [questionId]: option } as Partial<OnboardingData>);
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setResponses({ ...responses, [currentQuestion.id]: [value] });
    onUpdate({ [currentQuestion.id]: value } as Partial<OnboardingData>);
  };

  const goNext = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
      setInputValue(responses[questionData[index + 1].id]?.[0] || "");
    }
  };

  const goBack = () => {
    if (index > 0) {
      setIndex(index - 1);
      setInputValue(responses[questionData[index - 1].id]?.[0] || "");
    }
  };

  const skip = () => {
    setResponses({ ...responses, [currentQuestion.id]: ["none"] });
    onUpdate({ [currentQuestion.id]: "none" } as Partial<OnboardingData>);
    goNext();
  };

  const handleSubmit = () => {
    router.push("/dashboard/1");
  };

  const isLastQuestion = index === questionData.length - 1;
  const canProceed = currentResponses.length > 0;

  return (
    <div className="w-full h-full flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-2xl border-b w-full font-light mb-8">
          {currentQuestion.questionPrompt}
        </h1>

        {currentQuestion.isInput ? (
          <AnswerChoiceField
            value={inputValue}
            onChange={handleInputChange}
            inputType={currentQuestion.inputType}
          />
        ) : (
          <FormField
            options={currentQuestion.answers ?? []}
            selected={currentResponses}
            onSelect={handleSelect}
            allowMultiple={currentQuestion.allowMultiple}
          />
        )}
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        <BackBtn onClick={goBack} />
        <div className="flex gap-4">
          {currentQuestion.skip && <SkipBtn onClick={skip} />}
          {isLastQuestion ? (
            <SubmitBtn onClick={handleSubmit} />
          ) : (
            <NextBtn onClick={goNext} disabled={!canProceed} />
          )}
        </div>
      </div>
    </div>
  );
}

export { DisplayQuestion, questionData, type OnboardingData };
