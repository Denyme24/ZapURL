"use client";
import "../globals.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [url, seturl] = useState("");
  const [allUrl, setallUrl] = useState([]);
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [show, setshow] = useState(false);
  const [urlshow, seturlshow] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) {
      router.push("/shorten");
    } else if (session === null) {
      router.push("/login");
    }
  }, [session]);
  const validateURL = (url) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
  };
  const generateURL = async () => {
    if (!validateURL(url)) {
      setError("Please enter a valid URL.");
      return;
    }
    setError("");
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url, shortUrl: shorturl }),
    });
    const data = await res.json();

    seturl("");
    setshorturl("");
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${data.shortUrl}`);
  };

  const showAllURLs = async () => {
    const res = await fetch("/api/generate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setallUrl(data);
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
            {error && <p className="text-red-500">{error}</p>}
            {url.length === 0 || shorturl.length === 0 ? (
              <button
                type="button"
                className=" text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-400 dark:bg-gray-600 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-500 cursor-not-allowed "
                disabled
              >
                Generate
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    generateURL(), setshow(true);
                  }}
                  type="button"
                  className=" text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Generate
                </button>
              </>
            )}
          </div>
          {generated && (
            <>
              <div className="copyurl mt-2 flex flex-col items-center gap-2">
                <p className="text-center pt-2 font-semibold text-l">
                  Your Shorten URL
                </p>
                <div className="container mx-auto w-[45vw] h-[4vh] rounded-lg p-1 bg-blue-300">
                  <Link href={generated} target="_blank">
                    <code>{generated}</code>
                  </Link>
                </div>
                <button
                  onClick={() => {
                    {
                      show ? showAllURLs() : null;
                    }
                    seturlshow(!urlshow);
                    setshow(!show);
                  }}
                  type="button"
                  className=" text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {show ? "Show All URLs" : "Hide All URLs"}
                </button>

                {urlshow ? (
                  <>
                    <div className="all-urls container max-h-[20vh] overflow-y-auto scrollbar-hide">
                      {allUrl.map((url) => (
                        <div
                          key={url._id}
                          className="container mx-auto w-[45vw] h-[4vh] rounded-lg p-1 bg-blue-300 mt-3"
                        >
                          <Link href={url.shortUrl} target="_blank">
                            <code>
                              {process.env.NEXT_PUBLIC_HOST}/{url.shortUrl}
                            </code>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
