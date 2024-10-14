"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

type Props = {
  members: {
    id: string | number;
    imageUrl: string;
    name: string;
    role: string;
  }[];
};

const TeamCarousel = ({ members }: Props) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {members.map((data, index) => (
            <CarouselItem key={index}>
              <div
                key={data.id}
                className="bg-white border p-2 border-[#1E1E1E]/40 flex flex-col items-center shadow-lg rounded-lg overflow-hidden hover:shadow-xl"
              >
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  className="w-[250px] rounded-md h-[250px] align-middle object-contain object-center"
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold font-poppins text-center text-[#1E1E1E] mb-1">
                    {data.name}
                  </h3>
                  <p className="text-sm font-medium font-cabin text-center text-[#1E1E1E]/80">
                    {data.role}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex w-full items-center justify-center gap-x-4 mt-10">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default TeamCarousel;
