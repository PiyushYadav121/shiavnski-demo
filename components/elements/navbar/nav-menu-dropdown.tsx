"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  navLabel: string | React.ReactNode;
  subProducts: any[];
  isMobile?: boolean;
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavMenuDropdown({
  subProducts,
  navLabel,
  isMobile,
  setOpenMenu,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isMobile ? (
          <p className="text-[#E0E0E0] flex gap-x-2 items-center mt-3 w-full p-2 px-4 border-[0.5px] rounded-md border-[#e2e2e230] hover:bg-[#e2e2e208] hover:text-[#D162ED] font-nunito font-medium text-sm">
            {navLabel} <FaChevronDown />
          </p>
        ) : (
          <span className="flex items-center gap-x-2">
            {navLabel} <FaChevronDown />
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuGroup >
          {subProducts.map((subProduct) => (
            <React.Fragment key={subProduct.id}>
              {subProduct.category ? (
                <DropdownMenuSub >
                  <DropdownMenuSubTrigger>
                    {subProduct.label}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {subProduct.category.map((category: any) => (
                        <DropdownMenuItem key={category.id}>
                          <Link
                            onClick={() => {
                              if (setOpenMenu) setOpenMenu(false);
                            }}
                            href={category.route}
                          >
                            {category.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem >
                  <Link
                    onClick={() => {
                      if (setOpenMenu) setOpenMenu(false);
                    }}
                    href={subProduct.route}
                  >
                    {subProduct.label}
                  </Link>
                </DropdownMenuItem>
              )}
            </React.Fragment>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
