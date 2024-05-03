import { Header } from "./ui/Header";
import { Button } from "./ui/Button";
import { Footer } from "./ui/Footer";
import { About } from "./ui/About";
import { Moreinfo } from "./ui/Moreinfo";
import { Research } from "./ui/Research";
import { Join } from "./ui/Join";

export default function Home() {
  return (
    <main className="">
      <section
        className="hero-section min-h-screen w-screen bg-black bg-opacity-50 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
      >
        <Header />
        <div className="hero mt-32 flex flex-col items-center gap-5">
          <h1 className="text-center text-8xl font-bold">
            Feeling Alone? <br />{" "}
            <span className="text-purple-400">Ava.ai</span> is here for you
          </h1>
          <h3 className="max-w-[720px] text-center text-lg">
            Your friendly AI companion that listens, supports, and empowers you
            on your journey to mental well-being.
          </h3>
          <Button className="rounded-full px-8 font-semibold" arrow={true}>
            get started
          </Button>
        </div>
      </section>
      <section
        className="info bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: 'url("/main-bg2.svg")' }}
      >
        <About />
        <Moreinfo />
      </section>
      <section
        className="research-section h-fit min-h-screen bg-auto bg-top bg-no-repeat"
        style={{ backgroundImage: 'url("/research-bg.svg")' }}
      >
        <Research />
        <Join />
      </section>
      <Footer />
    </main>
  );
}
