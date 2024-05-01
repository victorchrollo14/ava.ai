import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  arrow: boolean;
}
export const Button = ({
  children,
  arrow = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "text-black bg-white uppercase p-3 flex flex-row items-center gap-4 hover:text-white hover:bg-black transition-all ease-linear border hover:border-white",
        className
      )}
    >
      {children}
      {arrow && (
        <span>
          <FaArrowRight />
        </span>
      )}
    </button>
  );
};
