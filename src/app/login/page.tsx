"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data: any) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="container h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-1/3 flex flex-col gap-3"
      >
        <div>
          <Input
            {...register("email")}
            className="border-blue-400 "
            placeholder="email"
            type="text"
          />
        </div>
        <div>
          <Input
            {...register("password")}
            className="border-blue-400 "
            placeholder="password"
            type="text"
          />
        </div>
        <Button className="p-3 bg-blue-400">Login</Button>
      </form>
    </div>
  );
};

export default Login;
