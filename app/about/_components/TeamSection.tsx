import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamMembers } from "@/lib/constants/teamMemers";
import { motion } from "framer-motion";
import TeamCarousel from "./elements/TeamCarousel";

const TeamSection = () => {
  return (
    <div className="py-20 bg-[#E2E2E2] text-black">
      <div className="page_alignment flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold text-[#1E1E1E] mb-6 text-center"
        >
          Meet Our <span style={{ color: "#A727CE" }}>Team</span>
        </motion.h2>
        <motion.p
          className="text-lg font-inter text-[#1E1E1E]/80 w-[80%] leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Meet the passionate individuals who make our company thrive and
          succeed.
        </motion.p>

        <Tabs
          defaultValue="Engineering"
          className="w-full flex flex-col items-center mt-20"
        >
          <TabsList>
            {["Engineering", "Accounting / HR"].map(
              (data: any, index) => (
                <TabsTrigger key={index} value={data}>
                  {data}
                </TabsTrigger>
              )
            )}
          </TabsList>

          {teamMembers.map((data) => (
            <TabsContent
              className="w-full mt-10"
              key={data.id}
              value={data.category}
            >
              <TeamCarousel members={data.members} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TeamSection;
