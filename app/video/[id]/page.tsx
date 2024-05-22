"use client";

import React from "react";
import { Sidebar } from "@ui/components/sidebar";
import Image from "next/image";
import {
  FaCcJcb,
  FaDesktop,
  FaFileAudio,
  FaMicrophone,
  FaVideoSlash,
} from "react-icons/fa";
import { Button } from "@ui/button/Button";
import { FaMobileScreen } from "react-icons/fa6";

const Video = ({ params }: { params: { id: string } }) => {
  return (
    <div className="video-page flex min-h-screen w-full flex-row bg-gray-900">
      <section className="min-h-screen w-1/5 p-5">
        <Sidebar />
      </section>
      <section className="w-4/5   p-4">
        <div className="video-section flex h-full w-full  flex-col  items-center justify-center gap-4 rounded-lg bg-black">
          <div className="video-overlay flex h-fit  gap-4 ">
            <Image
              src="/therapist_pic.jpg"
              width={500}
              height={300}
              alt={"therapist_pic"}
              className="rounded-lg"
            />
            <Image
              src="/depressed.jpg"
              width={500}
              height={300}
              alt={"depressed"}
              className="rounded-lg"
            />
          </div>
          <div className="buttons mt-8 flex flex-row items-center gap-5">
            <FaMicrophone className="h-5 w-5" />
            <FaVideoSlash className="h-5 w-5" />
            <Button
              className="rounded-full border-none border-white bg-red-700 px-8 capitalize text-white hover:border hover:bg-red-600"
              arrow={false}
            >
              Leave Call
            </Button>
            <FaDesktop className="h-5 w-5" />
            <FaMobileScreen className="h-5 w-5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
