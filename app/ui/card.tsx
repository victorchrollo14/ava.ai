import { cardType } from "./Research";
import Image from "next/image";

export const Card = ({ card }: { card: cardType }) => {
  console.log(card);
  return (
    <div className="card bg-white/10 p-4 rounded-xl w-[420px] flex flex-col gap-3 items-center">
      <Image src={card.image} width={400} height={200} alt="card image" className="rounded-xl"/>
       <h3 className="text-2xl font-semibold">{card.heading}</h3>
       <p>{card.des}</p>
       <div className="flex w-full justify-between mt-5">
        <span>{card.date}</span>
        <span>{card.author}</span>
       </div>
    </div>
  );
};
