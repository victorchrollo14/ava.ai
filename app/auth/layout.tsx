import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExtAuthButton } from "@ui/button/ExtAuthButton";
import { FaGithub, FaGoogle, FaApple } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className="login-page w-cover min-h-screen  bg-top-10 bg-no-repeat"
      style={{ background: "url('/bg-login.svg')" }}
    >
      <main className="flex h-screen items-center justify-center">
        <form className="flex flex-col items-center gap-2">
          <div className="mb-6">
            <Image
              src={"/ava-logo.png"}
              width={50}
              height={50}
              alt="ava.ai logo image"
            />
          </div>
          <h2 className="mb-8 text-xl font-medium">Welcome Back</h2>
          {children}
          <div className="mb-2 flex w-full items-center gap-2">
            <span className="text-sm text-gray-500">or continue with </span>
            <hr className="h-[1.5px] w-3/5 border-none bg-gray-500 " />
          </div>
          <div className="3rd-party-auths flex w-full flex-row justify-between">
            <ExtAuthButton>
              <FaGoogle className="h-5 w-5 text-black" />
            </ExtAuthButton>
            <ExtAuthButton>
              <FaGithub className="h-5 w-5 text-black" />
            </ExtAuthButton>
            <ExtAuthButton>
              <FaApple className="h-5 w-5 text-black" />
            </ExtAuthButton>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Layout;
