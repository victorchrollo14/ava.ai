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

  const research = [
    { link: "/", data: "overview" },
    { link: "/index", data: "index" },
  ];

  const features = [
    { link: "/", data: "Ava.ai" },
    { link: "/", data: "Realtime avatars" },
    { link: "/", data: "Marketplace" },
    { link: "/", data: "Analytics" },
  ];
  return (
    <footer className="mx-5 p-5  lg:mx-48" id="footer">
      <ul className="flex  flex-col flex-wrap  justify-between gap-5 sm:flex-row">
        <li className="flex  flex-col gap-2">
          <h1 className="mb-1 text-2xl font-bold">Research</h1>
          {research.map((item) => (
            <Link
              key={crypto.randomUUID()}
              href={item.link}
              className="text-lg hover:text-purple-400"
            >
              {item.data}
            </Link>
          ))}
        </li>
        <li className="flex flex-col gap-2">
          <h1 className="mb-1 text-2xl font-bold">Features</h1>
          {features.map((item) => (
            <Link
              key={crypto.randomUUID()}
              href={item.link}
              className="text-lg hover:text-purple-400"
            >
              {item.data}
            </Link>
          ))}
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
      </ul>
      <div className="footer-ending mt-10 flex justify-between py-3  ">
        <h1 className="flex items-center text-lg text-gray-300">
          Ava.ai © 2024
        </h1>
        <div className="other-socials ml-3 mt-5 flex gap-10  ">
          <FaDiscord className="h-5 w-5" />
          <MdOutlinePhone className="h-5 w-5" />
          <MdMailOutline className="h-5 w-5" />
          <FaInstagram className="h-5 w-5" />
          <FaLinkedin className="h-5 w-5" />
          <FaFacebookMessenger className="h-5 w-5" />
        </div>
      </div>
    </footer>
  );
};
