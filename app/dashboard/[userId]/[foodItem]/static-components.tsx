import Image from "next/image";
import {
  CopyAllBtn,
  QRBtn,
  StarBtn,
  CopyBtn,
  DisplayStatsBtn,
  ShowLessBtn,
} from "./dynamic-components";

interface ChildrenProps {
  children: React.ReactNode;
  imgSrc?: String;
}

function ImageOverlay({ children, imgSrc }: ChildrenProps) {
  return (
    <div className="w-full h-1/4 relative">
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

function Headline({ children }: ChildrenProps) {
  return (
    <span className="flex flex-row items-center justify-between gap-2 w-full">
      <h1 className="text-2xl font-bold">{children}</h1>
      <div className="flex flex-row gap-2 items-center">
        <ShowLessBtn />
        <CopyBtn />
      </div>
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

function ListItem({ children }: ChildrenProps) {
  return <li className="text-sm text-zinc-400">{children}</li>;
}

type ListContentType = {
  listType: number;
};

function ListContent({ listType }: ListContentType) {
  return (
    <ul
      className={`w-full flex flex-col items-start ${
        listType == 1 ? "list-disc" : "list-decimal"
      } pl-4`}
    >
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
      <ListItem>Item #1</ListItem>
    </ul>
  );
}

// BELOW ARE THE SECTIONS

function DescriptionSection() {
  return (
    <div className="flex flex-col gap-2">
      <Headline>Description</Headline>
      <TextContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        recusandae dicta possimus officia omnis expedita cum, corrupti, saepe
        itaque debitis in? Itaque, obcaecati. Labore quis minima quidem debitis
        ipsam. Quo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quod sed tempora temporibus iure deleniti dolore ipsum, ut cupiditate
        architecto quaerat voluptatum fugiat odio, mollitia voluptate. Porro
        suscipit at autem. Officia.
      </TextContent>
    </div>
  );
}

function IngredientSection() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Headline>Ingredients</Headline>
      <ListContent listType={1} />
    </div>
  );
}

function CookingSection() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Headline>Cooking</Headline>
      <TextContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        recusandae dicta possimus officia omnis expedita cum, corrupti, saepe
        itaque debitis in? Itaque, obcaecati. Labore quis minima quidem debitis
        ipsam. Quo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quod sed tempora temporibus iure deleniti dolore ipsum, ut cupiditate
        architecto quaerat voluptatum fugiat odio, mollitia voluptate. Porro
        suscipit at autem. Officia.
      </TextContent>
    </div>
  );
}

export {
  ImageOverlay,
  VStack,
  ActionBar,
  DescriptionSection,
  IngredientSection,
  CookingSection,
};
