"use client";

import React, { useState } from "react";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import MobileNav from "./mobile";
import LaptopNav from "./laptop";
import { AnimatePresence, animate, motion } from "framer-motion";
import { navMenu } from "@/lib/constants/navMenu";
import Link from "next/link";
import MobileLink from "@/components/layouts/mobileNavLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { NavMenuDropdown } from "./nav-menu-dropdown";

type Props = {};

const Navbar = (props: Props) => {
  const { isDesktopOrLaptop, isTabletOrMobile } = MediaQuery();
  const [openMenu, setOpenMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const router = useRouter();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0.5],
      },
    },
  };

  const ContainerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
        delayChildren: 0.03,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 0],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.5,
      },
    },
  };

  const handleClick = () => {
    setOpenMenu(false);

    router.push("/contacts");
  };

  return (
    <>
      <header className="bg-[#161616] font-poppins py-2 z-[99999] sticky top-0">
        {isDesktopOrLaptop && <LaptopNav />}
        {isTabletOrMobile && (
          <MobileNav openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
        )}
      </header>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-[99999] origin-top w-full h-screen fixed top-0 left-0 bg-[#161616] font-poppins py-2"
          >
            <MobileNav openMenu={openMenu} handleOpenMenu={handleOpenMenu} />

            <motion.div
              variants={ContainerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="page_alignment text-white mt-[7vh]"
            >
              <div className="overflow-hidden mb-4">
                <motion.div variants={mobileLinkVars}>
                  <p className="text-base font-poppins tracking-wide text-white/90">
                    Menu
                  </p>
                </motion.div>
              </div>

             

              {navMenu.map((data) => (
                <>
                  <div className="overflow-hidden">
                    {data.subProducts ? (
                      <>
                        <NavMenuDropdown
                          subProducts={data.subProducts}
                          navLabel={data.label}
                          isMobile={true}
                          setOpenMenu={setOpenMenu}
                        />
                      </>
                    ) : (
                      <MobileLink
                        mobileLinkVars={mobileLinkVars}
                        key={data.id}
                        id={data.id}
                        label={data.label}
                        route={data.route}
                        setOpenMenu={setOpenMenu}
                      />
                    )}
                  </div>
                </>
              ))}

              {/* <div className="overflow-hidden">
                <motion.div variants={mobileLinkVars}>
                  <Button
                    variant="primary"
                    onClick={handleClick}
                    className="mt-4 gap-x-2 w-full"
                  >
                    <Play className="h-5 w-5" />
                    Book demo
                  </Button>
                </motion.div>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
