import { ShoppingBag } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { LearnMoreBtn, NewGeneration } from "./dynamic-components";
import ItemLoading from "@/components/Skeletons/ItemLoading";

type SubItemType = {
  icon: React.ReactNode;
  text: String;
};

const SubData: SubItemType[] = [
  {
    icon: <CircleDollarSign height={16} width={16} />,
    text: "$10",
  },
  {
    icon: <ShoppingBag height={16} width={16} />,
    text: "4",
  },
];

function SubItem({ icon, text }: SubItemType) {
  return (
    <div className="text-zinc-400 flex flex-row items-center gap-2">
      {icon}
      <p className="font-bold text-xs">{text}</p>
    </div>
  );
}

function SubItemList() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-start gap-1">
        {SubData.map((item, i) => (
          <SubItem key={i} icon={item.icon} text={item.text} />
        ))}
      </div>
    </>
  );
}

interface CardProps {
  imgUrl?: string;
  title?: string;
  price?: string;
  orders?: number;
}

function Card() {
  return (
    <div className="w-full h-[400px] rounded-xl bg-white flex flex-col items-center shadow-lg">
      <div className="w-full h-2/3 overflow-clip rounded-2xl p-1 shrink-0">
        <Image
          src="/images/pizza.jpg"
          alt="Pizza"
          width={400}
          height={300}
          className="w-full h-full object-cover object-top rounded-2xl"
        />
      </div>
      <div className="text-black w-full flex flex-col items-start justify-start px-2 gap-1">
        <h1 className="font-light text-3xl">Pizza</h1>
        <SubItemList />
        <div className="self-center">
          <LearnMoreBtn />
        </div>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <ScrollArea className="h-[600px] w-full overflow-auto p-2 flex flex-col items-center gap-8">
      <Card />
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
      <NewGeneration />
    </ScrollArea>
  );
}

export { SubItemList, CardList };
