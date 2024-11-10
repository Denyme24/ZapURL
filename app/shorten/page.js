"use client";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generateURL = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url, shortUrl: shorturl }),
    });
    const data = await res.json();
    console.log(data);
    seturl("");
    setshorturl("");
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${data.shortUrl}`);
  };
  return (
    <>
      <div className="flex items-center justify-center h-[80vh]">
        <div className=" h-[60vh] w-[70vw]  ">
          <p className="text-center pt-2 font-semibold text-l">
            Paste Your URLs
          </p>
          <div className="inputs flex flex-col gap-4 justify-center items-center pt-5">
            <input
              className="focus:outline-blue-300 w-[45vw] h-[4vh] rounded-lg p-1 border-[1px] border-blue-300"
              type="text"
              placeholder="Enter your URL"
              onChange={(e) => {
                seturl(e.target.value);
              }}
              value={url}
            />
            <input
              className="focus:outline-blue-300 w-[45vw] h-[4vh] rounded-lg p-1 border-[1px] border-blue-300"
              type="text"
              placeholder="Enter preffered short URL"
              onChange={(e) => {
                setshorturl(e.target.value);
              }}
              value={shorturl}
            />
            <button
              onClick={generateURL}
              type="button"
              className=" text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Generate
            </button>
          </div>
          {generated && (
            <>
              <div className="copyurl mt-4">
                <p className="text-center pt-2 font-semibold text-l">
                  Your Shorten URL
                </p>
                <div className="container mx-auto w-[45vw] h-[4vh] rounded-lg p-1 bg-blue-300 mt-3">
                 <Link href={generated} target="_blank"  ><code>{generated}</code></Link> 
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
