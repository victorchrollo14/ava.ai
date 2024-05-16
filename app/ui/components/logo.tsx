import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo-with-bg flex w-full justify-center p-10">
      <Image src={"/ava-logo.png"} width={56} height={56} alt="Ava.ai logo" />
    </div>
  );
};

export default Logo;
