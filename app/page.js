"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [Session, setSession] = useState("/login");
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      setSession("/dashboard");
    } else if (session === null) {
      setSession("/login");
    }
  }, [session]);

  return (
    <>
      <div className="layout">
        <div className="container mx-auto text-center text-4xl p-10 text-gray-800 rounded-lg w-[50vw] mt-20">
          <h1 className="font-bold mb-4">
            Transform cumbersome links into short, sleek, and memorable URLs
          </h1>
          <p className="text-lg">
            Our service gives you the power to share links that are both
            functional and visually appealing—perfect for boosting engagement
            and tracking results.
          </p>
        </div>
        <div className="buttons flex flex-row justify-center items-center text-white gap-6">
          {" "}
          <Link href={Session}>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Get Started
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              About Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
