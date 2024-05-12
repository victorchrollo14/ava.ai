import React from "react";
import { Input } from "@ui/Input";
import { AuthButton } from "@ui/button/AuthButton";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <Input type="email" placeholder="email" required />
      <Input type="password" placeholder="password" required />
      <Input type="text" placeholder="confirm password" required />
      <AuthButton>Register</AuthButton>
      <p className="mb-2">
        Already have an account?{" "}
        <Link href={"/auth/login"} className="text-green-500 hover:font-bold">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default Register;
