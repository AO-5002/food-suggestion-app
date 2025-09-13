import Image from "next/image";

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

function Headline({ children }: ChildrenProps) {
  return <h1 className="text-lg font-bold">{children}</h1>;
}

function TextContent({ children }: ChildrenProps) {
  return <p className="text-sm text-zinc-400">{children}</p>;
}

function VStack({ children }: ChildrenProps) {
  return (
    <div className="w-full h-full flex flex-col items-start gap-4">
      {children}
    </div>
  );
}

export { Headline, TextContent, ImageOverlay, VStack };
