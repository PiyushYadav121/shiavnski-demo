"use client";

import React from "react";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion as Fmotion } from "framer-motion";

type Props = {
  openMenu?: boolean;
  //   setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenMenu?: () => void;
  mobileLinkVars?: any;
};

const MobileNav = ({ openMenu, handleOpenMenu, mobileLinkVars }: Props) => {
  return (
    <Fmotion.div className="page_alignment flex overflow-hidden items-center justify-between text-white">
      {/* logo */}
      {!openMenu ? (
        <div className="h-[40px] w-[142px] relative">
          <Link href="/">
            <Image fill alt="logo" src={"/logo-light.svg"} />
          </Link>
        </div>
      ) : (
        <div className="h-[40px] text-[#D162ED] flex items-center justify-center">
          <CircleArrowOutUpRight className="h-5 w-5" />
        </div>
      )}

      <div className="cursor-pointer">
        {openMenu ? (
          <p
            onClick={handleOpenMenu}
            className="font-cabin font-medium tracking-wide text-sm "
          >
            Close
          </p>
        ) : (
          <p
            onClick={handleOpenMenu}
            className="font-cabin font-medium tracking-wide text-sm"
          >
            Menu
          </p>
        )}
      </div>
    </Fmotion.div>
  );
};

export default MobileNav;
