import React from "react";
import { Sidebar } from "@ui/components/sidebar";

interface params {
  id: string;
}

const Chat = ({ params }: { params: params }) => {
  return (
    <div className="chat-page min-h-screen min-w-full bg-[#6A6969]">
      <section className="w-1/3 min-h-screen p-5">
        <Sidebar />
      </section>
    </div>
  );
};

export default Chat;
