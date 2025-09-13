import Image from "next/image";

function SubgroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gradient-to-tl from-black to-white flex flex-col items-center py-24 gap-8">
      {children}
    </div>
  );
}

function QuestionPrompt({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}

function Subgroup() {
  return (
    <SubgroupLayout>
      <div>
        <Image
          src={`/images/burger.jpg`}
          alt="Pizza"
          width={400}
          height={200}
          className="w-full h-full object-cover object-top rounded-2xl"
        />
      </div>
      <div>
        <QuestionPrompt>What is your favorite food subgroup?</QuestionPrompt>
      </div>
      <div>Subgroup Page</div>
    </SubgroupLayout>
  );
}

export { Subgroup };
