import Image from "next/image";
import { Check } from "lucide-react";

function SubgroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col items-start py-24 px-16 gap-8">
      {children}
    </div>
  );
}

function DotCompletion() {
  return (
    <div className="w-6 h-6 rounded-full p-1 bg-green-500 flex justify-center items-center">
      <Check className="text-white w-full h-full" />
    </div>
  );
}

function HeadingPrompt({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-bold uppercase">{children}</div>;
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-row items-center gap-4">{children}</div>;
}

function ListCompletion() {
  return (
    <>
      <ListItem>
        <DotCompletion />
        <HeadingPrompt>Allergies</HeadingPrompt>
      </ListItem>
      <ListItem>
        <DotCompletion />
        <HeadingPrompt>culture</HeadingPrompt>
      </ListItem>
      <ListItem>
        <DotCompletion />
        <HeadingPrompt>favorites</HeadingPrompt>
      </ListItem>
    </>
  );
}

function Subgroup() {
  return (
    <SubgroupLayout>
      <ListCompletion />
    </SubgroupLayout>
  );
}

export { Subgroup };
