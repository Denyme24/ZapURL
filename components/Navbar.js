"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [showDropDown, setshowDropDown] = useState(false);

  const handleLogout = () => {
    signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <>
      <nav className="pt-4">
        <ul className="flex flex-row justify-between items-center ml-10">
          <li>
            <Link href="/">
              <h1 className="text-black font-bold text-xl cursor-pointer">
                ZapURL
              </h1>
            </Link>
          </li>

          <li>
            <a href="https://github.com/Denyme24">
              <Image
                src="https://th.bing.com/th/id/OIP.UCmvnA7TLNJq3mad-AXpRQHaHa?rs=1&pid=ImgDetMain"
                alt=""
                height={30}
                width={30}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/naman-raj24/">
              <Image
                src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png"
                alt=""
                height={50}
                width={50}
              />
            </a>
          </li>
          <li className="user">
            {session ? (
              <>
                <button
                  onClick={() => setshowDropDown(!showDropDown)}
                  onBlur={() => {
                    setTimeout(() => {
                      setshowDropDown(false);
                    }, 500);
                  }}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white  md:mx-4 bg-blue-300  focus:ring-4 focus:outline-none focus:ring-blue-300 md:font-medium rounded-lg md:text-sm md:px-5 md:py-2.5 text-center inline-flex items-center    w-[40vw] h-[3vh] md:w-auto md:h-auto overflow-hidden text-[10px] "
                  type="button"
                >
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src={session.user.image}
                      alt="image"
                      height={25}
                      width={25}
                      className="rounded-full md:ml-0 ml-1"
                    />
                    <span className="text-black">
                      Welcome, {session.user.email.split("@")[0]}
                    </span>
                  </div>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdown"
                  className={`z-10  ${
                    showDropDown ? "" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow md:w-44 md:dark:bg-blue-300 dark:bg-blue-300  absolute md:right-12 md:mt-4 cursor-pointer text-center md:h-auto  h-[8vh] w-[30vw] right-6  `}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li className="cursor-pointer">
                      <Link
                        href={"/shorten"}
                        className="block md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:w-full text-xs md:text-lg text-black"
                      >
                        Shorten
                      </Link>
                    </li>
                    <div className="line h-[1px] opacity-10 bg-white"></div>
                    <li className="cursor-pointer">
                      <Link
                        href={"#"}
                        onClick={handleLogout}
                        className="block md:px-4 px-2 py-1 md:py-2 hover:bg-gray-100 text-black dark:hover:bg-gray-600 dark:hover:text-white md:w-full cursor-pointer text-xs md:text-lg"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="cursor-pointer mr-10">
                    <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
                    <lord-icon
                      src="https://cdn.lordicon.com/kdduutaw.json"
                      trigger="hover"
                      style={{ width: "35px", height: "35px" }}
                    ></lord-icon>
                  </button>
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
