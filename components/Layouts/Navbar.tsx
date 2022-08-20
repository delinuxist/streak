import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" w-full flex items-center border-b-2 border-gray-200 py-2 px-4 ">
      <Link href={""}>
        <div className=" w-[100px] md:w-[140px] md:h-[30px] ">
          <h1 className=" cursor-pointer text-3xl font-bold bg-gradient-to-r from-[#F51997]  to-yellow-500 text-transparent bg-clip-text font-serif">
            STREAK
          </h1>
          {/* <Image className="" src={} layout="responsive" /> */}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
