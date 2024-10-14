"use client";

import { navMenu } from "@/lib/constants/navMenu";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dot, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavMenuDropdown } from "../nav-menu-dropdown";

type Props = {};

const LaptopNav = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = () => {
    router.push("#contacts");
  };

  const handleDropdownToggle = (id: number) => {
    setIsDropdownOpen((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (event: MouseEvent) => {
    dropdownRefs.current.forEach((ref, index) => {
      if (
        ref &&
        !ref.contains(event.target as Node) &&
        isDropdownOpen === navMenu[index].id
      ) {
        setIsDropdownOpen(null);
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="page_alignment text-white flex  items-center justify-between">
      <div className="h-[40px] w-[142px] relative">
        <Link href="/">
          <Image fill alt="logo" src={"/logo-light.svg"} />
        </Link>
      </div>

              
      <div className="flex items-center gap-x-3 lg:gap-x-8  text-sm ">
        {navMenu.map((data, index) => (
          <div
            key={data.id}
            className="relative"
            ref={(el: any) => (dropdownRefs.current[index] = el)}
          >
            <div
              className={`flex items-center  cursor-pointer gap-x-2 text-[#e2e2e2] hover:text-white ${
                pathname.includes(data.route as string) &&
                "!text-white font-medium"
              }  font-poppins font-light tracking-wider transition-all ease-linear duration-200`}
              onClick={() =>
                data.subProducts
                  ? handleDropdownToggle(data.id)
                  : router.push(data.route)
              }
            >
              {data.subProducts ? (
                <NavMenuDropdown
                
                  subProducts={data.subProducts}
                  navLabel={data.label}
                />
              ) : (
                <span >{data.label}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={handleClick}
        variant="primary"
        size={"sm"}
        className="gap-x-2 text-sm"
      >
        <Play className="h-5 w-5" />
        Book demo
      </Button>
    </div>
  );
};

export default LaptopNav;
