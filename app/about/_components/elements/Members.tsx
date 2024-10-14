"use client";

import React from "react";

type Props = {
  members: {
    id: string | number; 
    imageUrl: string;
    name: string; 
    role: string; 
  }[];
};

const Members = ({ members }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((data) => (
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
      ))}
    </div>
  );
};

export default Members;
