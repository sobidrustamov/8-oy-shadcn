"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const submit = (data: any) => {
    axios.post("http://localhost:8000/register", data).then((res) => {
      router.push("/login");
    });
    reset();
  };
  return (
    <div className="container h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-1/3 flex flex-col gap-3"
      >
        <div>
          <Input
            {...register("name", { required: true })}
            className="border-blue-400"
            placeholder="Firs Name"
            type="text"
          />
        </div>
        <div>
          <Input
            {...register("email", { required: true })}
            className="border-blue-400"
            placeholder="Email"
            type="text"
          />
        </div>
        <div>
          <Input
            {...register("password", { required: true })}
            className="border-blue-400"
            placeholder="Password"
            type="password"
          />
        </div>
        <Button className="p-3 bg-blue-400">Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;
