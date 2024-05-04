import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="mx-5 flex items-center justify-between py-8">
      <div className="logo flex items-center">
        <Image
          src={"/ava-logo-removebg.png"}
          width={56}
          height={56}
          alt="Ava.ai logo"
        />
        <h1 className="text-3xl font-semibold">Ava.ai</h1>
      </div>
      <nav className="flex items-center gap-10 font-semibold">
        <Link href={"/"} className="hover:text-purple-400">
          HOME
        </Link>
        <Link href={"#solutions"} className="hover:text-purple-400">
          FEATURES
        </Link>
        <Link href={"#research"} className="hover:text-purple-400">
          RESEARCH
        </Link>
        <Link href={"#footer"} className="hover:text-purple-400">
          COMPANY
        </Link>
      </nav>
      <Button className="rounded-xl px-5 normal-case" arrow={false}>
        Try Ava
      </Button>
    </header>
  );
};
