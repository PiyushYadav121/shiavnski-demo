"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  id: number;
  label: string;
  route: string;
  mobileLinkVars: any;
  submenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileLink = ({
  id,
  label,
  route,
  mobileLinkVars,
  setOpenMenu,
  submenu,
}: Props) => {
  return (
    <motion.div variants={mobileLinkVars}>
      <Link
        onClick={() => {
          setOpenMenu(false);
        }}
        href={route}
        key={id}
      >
        <p className="text-[#E0E0E0] flex gap-x-2 items-center mt-3 w-full p-2 px-4 border-[0.5px] rounded-md border-[#e2e2e230] hover:bg-[#e2e2e208] hover:text-[#D162ED] font-nunito font-medium text-sm">
          {submenu && <ArrowRight className="h-5 w-5" />} {label}
        </p>
      </Link>
    </motion.div>
  );
};

export default MobileLink;
