import Image from "next/image";
import { BiArrowToRight } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const Join = () => {
  return (
    <section className="min-h-[80vh] flex justify-center items-center">
      <div
        className="join-program-section  bg-cover  bg-no-repeat  rounded-xl w-9/12 h-96"
        style={{ backgroundImage: 'url("/join-bg.svg")' }}
      >
        <div className="join-program-data flex flex-col items-center">
          <h1 className="text-5xl text-center font-bold mt-14 py-5 leading-snug">
            Join Our Beta Program in building the next big revolution in
            emotional intelligence.{" "}
          </h1>
          <span className="flex border  w-9/12 justify-between py-2 border-b-2 border-gray-500 border-t-0 border-r-0 border-l-0 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="bg-transparent w-full outline-none text-lg"
            />
            <FaArrowRightLong className="w-5 h-auto text-gray-500" />
          </span>
        </div>
      </div>
    </section>
  );
};
