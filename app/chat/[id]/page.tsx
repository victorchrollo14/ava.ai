"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Sidebar } from "@ui/components/sidebar";
import { CiLocationArrow1 } from "react-icons/ci";
import AnswerComponent from "@ui/components/AnswerComponent";
import QuestionComponent from "@ui/components/QuestionComponent";
import { questionData } from "../../data/question";
import Logo from "@ui/components/logo";
import DefaultChat from "@ui/components/DefaultChat";

interface params {
  id: string;
}

interface qnaData {
  id: string;
  question: string;
  answer: any;
}

const Chat = ({ params }: { params: params }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<any>(null);

  const getAnswer = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(query);
      const response = await fetch("http://localhost:3001/api/v1/gpt", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(query),
      });
      const output = await response.json();

      const finalData = {
        id: crypto.randomUUID(),
        question: query,
        answer: output.answer,
      };

      if (data) {
        localStorage.setItem("qnaData", JSON.stringify([...data, finalData]));
        setData([...data, finalData]);
      } else {
        localStorage.setItem("qnaData", JSON.stringify([finalData]));
        setData([finalData]);
        console.log(localStorage.getItem("qnaData"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("qnaData");
    if (data) {
      const parsedData: qnaData = JSON.parse(data);
      setData(parsedData);
    }
  }, []);

  return (
    <div className="chat-page flex min-h-screen min-w-full  bg-gray-900">
      <section className="min-h-screen w-1/3 p-5">
        <Sidebar />
      </section>
      <section className="chat-section relative mb-8 flex w-2/3 flex-col p-5">
        <div className="chat-area max-h-[85vh] w-4/5 overflow-y-auto scroll-auto rounded-sm ">
          {data ? (
            data.map((item: any) => (
              <div className="question-ans-group mb-6" key={item.id}>
                <QuestionComponent>{item.question}</QuestionComponent>
                <AnswerComponent>{item.answer}</AnswerComponent>
              </div>
            ))
          ) : (
            <DefaultChat />
          )}
          {}
        </div>
        <span className="absolute bottom-0 flex h-14  w-9/12 items-center justify-between rounded-full bg-black py-2 pl-6 pr-3">
          <form action="" onSubmit={(e) => getAnswer(e)} className="h-fit">
            <input
              type="text"
              name="question"
              id=""
              placeholder="enter your problem"
              className="w-full bg-transparent text-lg outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 hover:bg-white">
            <CiLocationArrow1 className="h-5 w-5 font-bold text-black" />
          </span>
        </span>
      </section>
    </div>
  );
};

export default Chat;
