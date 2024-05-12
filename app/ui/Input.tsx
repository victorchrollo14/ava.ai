import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={clsx(
        "w-72 rounded-sm px-5 py-2 text-black focus:border-black",
        className,
      )}
      {...rest}
    />
  );
};
