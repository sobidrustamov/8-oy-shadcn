"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { ModeToggle } from "./theme";
export const Header = () => {
  const data = useSession();

  console.log(data);

  return (
    <div className="p-5 bg-blue-500  ">
      {data.status == "loading" ? (
        "Loading"
      ) : (
        <div className="container flex items-center justify-between gap-5">
          <div>
            <Link href="/" className="text-3xl">
              Logo
            </Link>
          </div>
          <div>
            {data.status == "unauthenticated" ? (
              <div className="flex gap-5 items-center">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
                <ModeToggle />
              </div>
            ) : (
              <div className="flex gap-5 items-center">
                <Link href="/profile">Profile</Link>
                <ModeToggle />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
