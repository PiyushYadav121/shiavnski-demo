"use client";

// make a new component for partner services in capabillities navbar

import Clients from "@/components/elements/clients";
import { MediaQuery } from "@/lib/helpers/mediaQuery";

export default function Home() {
    const { isDesktopOrLaptop, isTabletOrMobile } = MediaQuery();
  
    return (
      <main>
 <section id="clients" className="py-20 bg-[#161616]">
        <div
          className={`${
            isDesktopOrLaptop
              ? "flex-[0.5] px-[10%] mb-10 flex flex-col justify-center items-center"
              : "page_alignment mb-6"
          }`}
        >
          <h4 className="font-inter text-[#e1e1e1] font-normal text-lg lg:text-xl">
            Join a Network of Leading Organizations
          </h4>
          <h1 className="font-cabin text-[white] font-extrabold mt-5 text-3xl md:text-5xl lg:text-7xl lg:max-w-[80%] ">
            Our <span className="text-[#A727CE] "> Collaborative</span> Partners
          </h1>
          <h3 className="font-inter text-[#e1e1e1]/80 mt-2 mb-5 text-sm md:text-base ">
            Collaboration is key to our success, and our partners are integral
            to the innovative solutions we provide
          </h3>
        </div>

        <div className="min-h-max py-5 relative">
          <Clients align="start" speed={0.5} direction="forward" />
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, #161616, #1d1d1e00, #24242600, #2a2b2f00, #31333800, #31333800, #31333800, #31333800, #2a2b2f00, #24242600, #1d1d1e00, #161616)",
            }}
            className="absolute inset-0"
          />
        </div>
      </section>
        
      </main>
    );
  }