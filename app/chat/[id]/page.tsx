import React from "react";
import { Sidebar } from "@ui/components/sidebar";
import { CiLocationArrow1 } from "react-icons/ci";
import Image from "next/image";
import AnswerComponent from "@ui/components/AnswerComponent";
import QuestionComponent from "@ui/components/QuestionComponent";
import { questionData } from "../../data/question";

interface params {
  id: string;
}

const Chat = ({ params }: { params: params }) => {
  return (
    <div className="chat-page flex min-h-screen min-w-full  bg-gray-900">
      <section className="min-h-screen w-1/3 p-5">
        <Sidebar />
      </section>
      <section className="chat-section relative mb-8 flex w-2/3 flex-col p-5">
        <div className="chat-area max-h-[85vh] w-4/5 overflow-y-auto scroll-auto rounded-sm ">
          {questionData.map((item) => (
            <div className="question-ans-group mb-6" key={item.id}>
              <QuestionComponent>{item.question}</QuestionComponent>
              <AnswerComponent>{item.answer}</AnswerComponent>
            </div>
          ))}
        </div>
        <span className="absolute bottom-0 flex h-14  w-9/12 justify-between rounded-full bg-black py-2 pl-6 pr-3">
          <input
            type="text"
            name="question"
            id=""
            placeholder="enter your problem"
            className="w-full bg-transparent py-4 text-lg outline-none"
          />
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 hover:bg-white">
            <CiLocationArrow1 className="h-5 w-5 font-bold text-black" />
          </span>
        </span>
      </section>
    </div>
  );
};

export default Chat;
