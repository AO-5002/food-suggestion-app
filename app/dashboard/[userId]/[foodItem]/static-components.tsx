import Image from "next/image";
import {
  CopyAllBtn,
  QRBtn,
  StarBtn,
  CopyBtn,
  DisplayStatsBtn,
} from "./dynamic-components";

interface ChildrenProps {
  children: React.ReactNode;
  imgSrc?: String;
}

function ImageOverlay({ children, imgSrc }: ChildrenProps) {
  return (
    <div className="w-full h-1/2 relative">
      <Image
        src={`/images/${imgSrc}.jpg`}
        alt="Pizza"
        width={400}
        height={200}
        className="w-full h-full object-cover object-top rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl">
        <h1 className="text-4xl text-white font-light absolute z-10 bottom-5 left-5">
          {children}
        </h1>
      </div>
    </div>
  );
}

function ActionBar() {
  return (
    <div className="flex items-center justify-between w-full border-b pb-2">
      <div className="flex flex-row items-center gap-4">
        <StarBtn />

        <DisplayStatsBtn />
        <QRBtn />
      </div>
      <div>
        <CopyAllBtn />
      </div>
    </div>
  );
}

interface IngredientListProps {
  ingredients: string[];
}

function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <ul className="list-disc pl-5">
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}

function Headline({ children }: ChildrenProps) {
  return (
    <span className="flex flex-row items-center justify-between gap-2 mb-2">
      <h1 className="text-2xl font-bold">{children}</h1>
      <CopyBtn />
    </span>
  );
}

function TextContent({ children }: ChildrenProps) {
  return <p className="text-sm text-zinc-400">{children}</p>;
}

function VStack({ children }: ChildrenProps) {
  return (
    <div className="w-full h-full flex flex-col items-start gap-8">
      {children}
    </div>
  );
}

export { Headline, TextContent, ImageOverlay, VStack, ActionBar };
