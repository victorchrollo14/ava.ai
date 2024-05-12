import { Input } from "@ui/Input";
import { AuthButton } from "@ui/button/AuthButton";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Input type="email" placeholder="email" required />
      <Input type="password" placeholder="password" required />
      <AuthButton>login</AuthButton>
      <p className="mb-2">
        Don&apos;s have an account?{" "}
        <Link
          href={"/auth/register"}
          className="text-green-500 hover:font-bold"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
