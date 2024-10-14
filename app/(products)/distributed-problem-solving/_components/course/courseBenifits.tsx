"use client";

import { MediaQuery } from "@/lib/helpers/mediaQuery";

type Props = {
  imgUrl: string;
  benefits: {
    title: string;
    subtitle: string;
    description: string;
  }[];
};

export default function CourseBenifits({ benefits, imgUrl }: Props) {
  const { isDesktopOrLaptop } = MediaQuery();

  return (
    <div className="bg-[#161616] py-32">
      <div className="page_alignment">
        <h1 className="font-cabin text-white font-bold mt-5 text-3xl md:text-4xl lg:text-5xl md:max-w-[70%] ">
          Course <span style={{ color: "#A727CE" }}>Modules and Content </span>
        </h1>
        <h3 className="font-inter text-white/80 mt-5 text-sm md:text-base md:max-w-[70%]">
          Detailed Breakdown of the Course Structure and Learning Modules
        </h3>

        <div className="mt-10 flex">
          {isDesktopOrLaptop && (
            <div className="flex-1 flex items-center justify-center">
              <img
                src={imgUrl}
                className="object-center object-contain w-[80%]"
              />
            </div>
          )}
          <div className="flex-1 px-10 flex items-center justify-center">
            <div className="relative flex flex-col items-start gap-8 w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="h-full w-[2px] bg-[#e2e2e22a]" />
              </div>

              {benefits.map((benifit, index) => (
                <div key={index} className={`relative flex items-start gap-3 `}>
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#161616]">
                    <div className={`h-4 w-4 rounded-full bg-[#e2e2e2]`} />
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-medium font-nunito text-[#e2e2e2]/80">
                      {benifit.subtitle}
                    </div>
                    <div className="text-xl font-cabin text-white font-semibold">
                      {benifit.title}
                    </div>
                    <div className="text-base leading-none mt-1 text-white/80">
                      {benifit.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
