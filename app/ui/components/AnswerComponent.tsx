import React, { ReactNode } from "react";
import Image from "next/image";

const AnswerComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="answer-section flex gap-3 p-3">
      <Image
        src={"/ava-logo.png"}
        width={24}
        height={24}
        alt="ava.ai logo"
        className="h-8 w-8 rounded-fullj"
      />
      <span className="text-lg">{children}</span>
    </div>
  );
};

export default AnswerComponent;
