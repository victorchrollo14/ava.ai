import React, { ReactNode } from "react";
import Image from "next/image";

const QuestionComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="question-part mb-3 flex gap-3 rounded-xl bg-gray-800 px-5 py-3">
      <Image
        src="/user2.jpg"
        width="24"
        height="24"
        alt="user"
        className="h-8 w-8 rounded-full"
      />
      <p className="text-lg">{children}</p>
    </div>
  );
};

export default QuestionComponent;
