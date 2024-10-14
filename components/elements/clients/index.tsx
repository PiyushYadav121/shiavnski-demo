"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import ClientCard from "./card";
import { clients } from "@/lib/constants/clients";

type Props = {
  align: "start" | "center" | "end";
  speed: number;
  direction?: "forward" | "backward";
};

const Clients = (props: Props) => {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: props.speed,
          stopOnInteraction: false,
          stopOnFocusIn: false,
          direction: props.direction,
        }),
      ]}
      opts={{
        align: props.align,
        loop: true,
      }}
    >
      <CarouselContent>
        {clients.map((data) => (
          <CarouselItem
            key={data.id}
            // className="basis-[75%] md:basis-[45%] lg:basis-[35%] xl:basis-[24%]"
          >
            <ClientCard imgSrc={data.imgSrc} alt={data.clientName} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Clients;
