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
        className="hero-section min-h-screen w-screen bg-cover bg-center bg-black bg-opacity-50"
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
      >
        <Header />
        <div className="hero mt-32 flex flex-col items-center gap-5">
          <h1 className="font-bold text-8xl text-center">
            Feeling Alone? <br />{" "}
            <span className="text-purple-400">Ava.ai</span> is here for you
          </h1>
          <h3 className="text-center max-w-[720px] text-lg">
            Your friendly AI companion that listens, supports, and empowers you
            on your journey to mental well-being.
          </h3>
          <Button className="font-semibold rounded-full px-8" arrow={true}>
            get started
          </Button>
        </div>
      </section>
      <section
        className="info bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: 'url("/main-bg2.svg")' }}
      >
        <About />
        <Moreinfo />
      </section>
      <section
        className="research-section min-h-screen h-fit bg-auto bg-no-repeat bg-top"
        style={{ backgroundImage: 'url("/research-bg.svg")' }}
      >
        <Research />
        <Join />
      </section>
      <Footer />
    </main>
  );
}
