"use client";
import { useState } from "react";
import Image from "next/image";

interface FoodContent {}

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
      <div className="text-black w-full flex-1 flex flex-col items-start justify-start p-2">
        <h1 className="font-light text-3xl">Pizza</h1>
        <p></p>
        <p className="text-sm text-zinc-400 font-bold">$10</p>
      </div>
    </div>
  );
}

function FoodList() {}

export { Card };
