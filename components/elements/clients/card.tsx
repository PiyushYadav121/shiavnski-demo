"use client";

import React from "react";

type Props = {
  imgSrc?: string;
  alt?: string;
};

const ClientCard = (props: Props) => {
  return (
    <div className="bg-[#5f5d5d17] rounded-lg p-10 max-w-[352px] backdrop-filter backdrop-blur-sm">
      <img
        src={props.imgSrc as string}
        alt={props.alt as string}
        className="h-[50px] w-[200px] object-contain mix-blend-lighten"
      />
    </div>
  );
};

export default ClientCard;
