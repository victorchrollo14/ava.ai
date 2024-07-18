"use client";

import { Header } from "@ui/Header";
import { Button } from "@ui/button/Button";
import { Footer } from "@ui/Footer";
import { About } from "@ui/landing/About";
import { Moreinfo } from "@ui/landing/Moreinfo";
import { Research } from "@ui/landing/Research";
import { Join } from "@ui/landing/Join";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="text-sm">
      <motion.section
        className="hero-section min-h-screen w-screen bg-black  bg-cover bg-fixed bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        {" "}
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/landing-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 min-h-screen bg-black bg-opacity-50">
          <Header />
          <motion.div
            className="hero  mt-32 flex flex-col items-center gap-5"
            initial={{ y: "80%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1, y: "80%" }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <h1 className="text-white-400 text-center  text-8xl font-bold">
              Feeling Alone? <br />{" "}
              <span className="text-purple-400">Ava.ai</span> is here for you
            </h1>
            <h3 className="max-w-[720px] text-center text-lg text-white">
              Your friendly AI companion that listens, supports, and empowers
              you on your journey to mental well-being.
            </h3>
            <Button
              type="button"
              className="rounded-full px-8 font-semibold"
              arrow={true}
              onClick={() => {
                router.push("/auth/register");
              }}
            >
              get started
            </Button>
          </motion.div>
        </div>
      </motion.section>
      <section
        className="info bg-cover bg-fixed bg-top-10 bg-no-repeat"
        style={{ backgroundImage: 'url("/gradient-bg.svg")' }}
      >
        <About />
        <Moreinfo />
        <Research />
        <Join />
      </section>
      <Footer />
    </main>
  );
}
