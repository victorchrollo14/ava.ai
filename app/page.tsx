"use client";
import { Header } from "./ui/Header";
import { Button } from "./ui/Button";
import { Footer } from "./ui/Footer";
import { About } from "./ui/About";
import { Moreinfo } from "./ui/Moreinfo";
import { Research } from "./ui/Research";
import { Join } from "./ui/Join";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <motion.section
        className="hero-section min-h-screen w-screen bg-black bg-opacity-50 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Header />
        <motion.div
          className="hero  mt-32 flex flex-col items-center gap-5"
          initial={{ y: "80%" }}
          animate={{ y: "0%" }}
          exit={{ opacity: 1, y: "80%" }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <h1 className="text-center text-white-400  text-8xl font-bold">
            Feeling Alone? <br />{" "}
            <span className="text-purple-400">Ava.ai</span> is here for you
          </h1>
          <h3 className="max-w-[720px] text-white text-center text-lg">
            Your friendly AI companion that listens, supports, and empowers you
            on your journey to mental well-being.
          </h3>
          <Button className="rounded-full px-8 font-semibold text-white" arrow={true}>
            get started
          </Button>
        </motion.div>
      </motion.section>
      <section
        className="info bg-cover bg-top-10 bg-no-repeat"
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
