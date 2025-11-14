import Image from "next/image";
import { Check } from "lucide-react";

interface SubgroupLayoutProps {
  children: React.ReactNode;
}

function SubgroupLayout({ children }: SubgroupLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col items-start py-24 px-16 gap-8">
      {children}
    </div>
  );
}

function DotCompletion({ completed = false }: { completed?: boolean }) {
  return (
    <div
      className={`w-6 h-6 rounded-full p-1 flex justify-center items-center transition-colors ${
        completed ? "bg-green-500" : "bg-zinc-300 dark:bg-zinc-700"
      }`}
    >
      {completed && <Check className="text-white w-full h-full" />}
    </div>
  );
}

function HeadingPrompt({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-bold uppercase">{children}</div>;
}

interface ListItemProps {
  children: React.ReactNode;
}

function ListItem({ children }: ListItemProps) {
  return <div className="flex flex-row items-center gap-4">{children}</div>;
}

interface ProgressStep {
  id: string;
  label: string;
  completed: boolean;
}

interface ListCompletionProps {
  steps: ProgressStep[];
}

function ListCompletion({ steps }: ListCompletionProps) {
  return (
    <>
      {steps.map((step, index) => (
        <ListItem key={step.id}>
          <DotCompletion completed={step.completed} />
          <HeadingPrompt>{step.label}</HeadingPrompt>
        </ListItem>
      ))}
    </>
  );
}

interface DynamicSubgroupProps {
  completedQuestions: string[];
  allQuestions: Array<{ id: string; questionPrompt: string }>;
}

function DynamicSubgroup({
  completedQuestions,
  allQuestions,
}: DynamicSubgroupProps) {
  const steps: ProgressStep[] = allQuestions.map((q) => ({
    id: q.id,
    label: q.id.replace(/_/g, " "),
    completed: completedQuestions.includes(q.id),
  }));

  return (
    <SubgroupLayout>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Your Food Profile</h2>
        <p className="text-sm opacity-70">
          {completedQuestions.length} of {allQuestions.length} completed
        </p>
      </div>
      <ListCompletion steps={steps} />
    </SubgroupLayout>
  );
}

export { DynamicSubgroup, SubgroupLayout, ListCompletion };
