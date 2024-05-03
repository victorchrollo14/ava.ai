import Image from "next/image";
import { Button } from "./Button";

export const About = () => {
  return (
    <section
      className="about-us-section flex justify-center min-h-[90vh]"
    >
      <div className="about flex flex-col md:flex-row items-center mt-40 justify-items-start h-auto gap-10 max-w-5xl">
        <div className="image-part w-1/2 rounded-md">
            <Image src={'/about-us-img.jpg'}  width={700} height={500} alt="AR glasses image" className="rounded-2xl" />
        </div>
        <div className="about-us-explanation flex flex-col gap-5 w-1/2">
          {" "}
          <h3 className="uppercase font-semibold">about us</h3>
          <h1 className="text-4xl font-bold">
            Ava is Your Ai Champion for Mental Well-being
          </h1>
          <h3 className="text-lg ">
            Ava.ai is more than just an app.it&apos;s a revolution in mental
            wellness support. We&apos;re a team dedicated to building the
            world&apos;s leading AI companion, focused on fostering genuine
            connection and empowering individuals on their path to emotional
            well-being.
          </h3>
          <Button className="rounded-full px-8 w-fit" arrow={true}>Know More</Button>
        </div>
      </div>
    </section>
  );
};
