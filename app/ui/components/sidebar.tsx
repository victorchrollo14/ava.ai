import Link from "next/link";
import Image from "next/image";
import { Button } from "@ui/button/Button";
import { FaUser } from "react-icons/fa";
import { FaMessage, FaRegMessage } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import { PiChatDots, PiChatDotsLight } from "react-icons/pi";

export function Sidebar() {
  return (
    <div className="flex h-[95vh] w-72 flex-col  rounded-2xl bg-black">
      <div className="flex h-20 items-center  px-6 ">
        <div className="flex items-center gap-2">
          <Link href={"/"} className="logo flex items-center">
            <Image
              src={"/ava-logo-removebg.png"}
              width={56}
              height={56}
              alt="Ava.ai logo"
            />
          </Link>
          <span className="text-xl font-semibold text-white">Ava.ai</span>
        </div>
      </div>
      <Button
        arrow={false}
        className="mx-6 mt-4 rounded-full bg-purple-500 px-4 py-2 text-white"
      >
        <PlusIcon className="mr-2 h-4 w-4" />
        New Chat
      </Button>
      <div className="mt-8 flex items-center justify-between border-b border-t border-[#333333] px-6 py-2">
        <h3 className="text-sm font-semibold text-white">Your Conversations</h3>
        <button className="text-sm text-gray-400 hover:text-[#6B46C1]">
          Clear Chat
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          <Link
            className="flex items-center justify-between text-white hover:text-[#6B46C1]"
            href="#"
          >
            <div className="flex items-center gap-2">
              <PiChatDots />
              <span>Chat 1</span>
            </div>
          </Link>
          <Link
            className="flex items-center justify-between text-white hover:text-[#6B46C1]"
            href="#"
          >
            <div className="flex items-center gap-2">
              <PiChatDots />
              <span>Chat 2</span>
            </div>
          </Link>
          <Link
            className="flex items-center justify-between text-white hover:text-[#6B46C1]"
            href="#"
          >
            <div className="flex items-center gap-2">
              <PiChatDots />
              <span>Chat 3</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-auto flex flex-col items-center justify-between gap-4 border-t border-[#333333] px-6 py-4">
        <button className="flex w-[80%] justify-start   gap-2 rounded-full border border-gray-300  bg-black px-3 py-2 text-lg text-white hover:bg-[#333333]">
          <div className=" rounded-full bg-gray-400 p-1">
            <SettingsIcon className="h-5 w-5" />
          </div>
          Settings
        </button>
        <button className="flex w-[80%] items-center gap-2 rounded-full border border-gray-300 bg-black px-4 py-2  text-white hover:bg-[#333333]">
          <FaUser />
          John Doe
        </button>
      </div>
    </div>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
