import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdMailOutline, MdOutlineMail, MdOutlinePhone } from "react-icons/md";

export const Footer = () => {
  const legal = [
    { link: "/", data: "Privacy policy" },
    { link: "/terms-and-services", data: "Terms & Services" },
    { link: "/terms-of-user", data: "Terms of use" },
    { link: "/refund-policy", data: "Refund policy" },
  ];

  const sitelinks = [
    { link: "/", data: "Home" },
    { link: "/about", data: "About Us" },
    { link: "/solutions", data: "Solutions" },
    { link: "/research", data: "Research" },
  ];
  return (
    <footer className="mx-5 p-5">
      <ul className="flex flex-col gap-5 sm:flex-row  flex-wrap justify-between">
        <li className="max-w-[420px]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </li>
        <li className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-1">Legal</h1>
          {legal.map((item) => (
            <Link
              key={crypto.randomUUID()}
              className="text-lg hover:text-purple-400"
              href={item.link}
            >
              {item.data}
            </Link>
          ))}
        </li>
        <li className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-1">Company</h1>
          {sitelinks.map((item) => (
            <Link
              key={crypto.randomUUID()}
              className="text-lg hover:text-purple-400"
              href={item.link}
            >
              {item.data}
            </Link>
          ))}
        </li>
        <li className="flex flex-col">
          <h1 className="flex items-center text-2xl font-bold">
            <Image
              src={"/ava-logo.png"}
              width={48}
              height={48}
              alt="Ava.ai Logo"
            />{" "}
            Ava.ai
          </h1>
          <div className="flex items-center text-lg gap-3 ml-3">
            <MdOutlinePhone className="w-6 h-6" />
            <Link href={"/"}>+91 94836 09845</Link>
          </div>
          <div className="flex items-center text-lg gap-3 ml-3">
            <MdMailOutline className="w-6 h-6" />
            <Link href={"/"}>gautham@ava.com</Link>
          </div>
          <div className="other-socials flex gap-2 mt-5 ml-3 text-slate-400">
            <FaDiscord className="w-8 h-8" />
            <FaInstagram className="w-8 h-8" />
            <FaLinkedin className="w-8 h-8" />
            <FaFacebookMessenger className="w-8 h-8" />
          </div>
        </li>
      </ul>
    </footer>
  );
};
