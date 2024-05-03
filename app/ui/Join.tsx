import Image from "next/image";
import { BiArrowToRight } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const Join = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center">
      <div
        className="join-program-section  h-96  w-9/12  rounded-xl bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/join-bg.svg")' }}
      >
        <div className="join-program-data flex flex-col items-center">
          <h1 className="mt-14 py-5 text-center text-5xl font-bold leading-snug">
            Join Our Beta Program in building the next big revolution in
            emotional intelligence.{" "}
          </h1>
          <span className="flex w-9/12  justify-between border border-b-2 border-l-0 border-r-0 border-t-0 border-gray-500 py-2 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="w-full bg-transparent text-lg outline-none"
            />
            <FaArrowRightLong className="h-auto w-5 text-gray-500" />
          </span>
        </div>
      </div>
    </section>
  );
};
