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
    <footer className="mx-5 p-5" id="footer">
      <ul className="flex flex-col flex-wrap justify-between  gap-5 sm:flex-row">
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
          <h1 className="mb-1 text-2xl font-bold">Legal</h1>
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
          <h1 className="mb-1 text-2xl font-bold">Company</h1>
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
          <div className="ml-3 flex items-center gap-3 text-lg">
            <MdOutlinePhone className="h-6 w-6" />
            <Link href={"/"}>+91 94836 09845</Link>
          </div>
          <div className="ml-3 flex items-center gap-3 text-lg">
            <MdMailOutline className="h-6 w-6" />
            <Link href={"/"}>gautham@ava.com</Link>
          </div>
          <div className="other-socials ml-3 mt-5 flex gap-2 text-slate-400">
            <FaDiscord className="h-8 w-8" />
            <FaInstagram className="h-8 w-8" />
            <FaLinkedin className="h-8 w-8" />
            <FaFacebookMessenger className="h-8 w-8" />
          </div>
        </li>
      </ul>
    </footer>
  );
};
