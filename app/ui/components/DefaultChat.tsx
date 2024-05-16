import React from "react";
import Logo from "./logo";
import { BsLightbulbFill } from "react-icons/bs";

const DefaultChat = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <div className="question-boxes">
        <div className="max-w-sm rounded-lg border border-purple-400 p-5">
          <BsLightbulbFill />
          <span>How can I solve my problems</span>
        </div>
      </div>
    </div>
  );
};

export default DefaultChat;
