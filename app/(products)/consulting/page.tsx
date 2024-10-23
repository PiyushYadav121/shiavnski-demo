"use client";
import React from "react";
import HeorSec from "./_components/HeorSec";
import AbouSec from "./_components/AbouSec";
import ServiSec from "./_components/ServiSec";
import TopSec from "./_components/TopSec";
type Props = {};

const Consulting = (props: Props) => {
  return (
    <>
      {/* <HeorSec /> */}
      {/* <AbouSec /> */}
      <TopSec/>
      <ServiSec />
    </>
  );
};

export default Consulting;
