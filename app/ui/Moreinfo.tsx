import Image from "next/image";
import { FaCircleUp } from "react-icons/fa6";

export const Moreinfo = () => {
  return (
    <section className="more-info-section  w-screen min-h-screen mx-10">
      <div className="more-info ">
        <h1 className="text-center font-bold text-8xl text-gray-300 opacity-20">
          How Ava.ai Can Help
        </h1>
        <div className="more-info-des flex flex-col items-center gap-10 lg:flex-row lg:justify-between mt-40">
          <div className="more-info-msg w-2/3">
            <p className="mb-2">Conversation & Emotional Support</p>
            <hr className="w-5/6 h-5" />
            <h1 className="font-bold text-8xl mt-6">
              Talk to Ava about anything on your mind.
            </h1>
          </div>
          <div className="card mt-8  w-1/3">
            <div className="w-96 p-5 bg-white/[0.10]  rounded-xl rotate-12">
              <div className="chat-1 flex flex-row gap-4 mb-4">
                <Image
                  width={32}
                  height={32}
                  src="/user1.png"
                  alt=""
                  className="rounded-full h-9 w-9 mt-2"
                />
                <p className="message-1">
                  Remember, it&apos;s okay to ask for help if you need it. Would
                  you like me to find some resources for managing stress or
                  improving sleep?
                </p>
              </div>{" "}
              <div className="chat-1 flex flex-row gap-4">
                <Image
                  width={32}
                  height={32}
                  src="/user2.jpg"
                  alt=""
                  className="rounded-full h-9 w-9 mt-2"
                />
                <p className="message-1 w-44">
                  Actually, getting some good sleep tips would be great.{" "}
                </p>
              </div>
              <div className="border flex items-center justify-between border-white p-2 pl-5 mt-5 rounded-full ">
                you got this right?
                <FaCircleUp className="w-7 h-7" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
