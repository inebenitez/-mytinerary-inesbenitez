import React from 'react';
import { Link as Anchor } from "react-router-dom";

export default function NoItinerary() {
  return (
    <div className='flex flex-col justify-center items-center h-[300px] font-bold text-lg text-neutral-500'>
      <p>Not Found Itinerary</p>
      <div className="mt-4">
        <button className="font-bold bg-[#4f46e5] text-white rounded-[8px] text-xs md:text-sm w-[90px] h-[30px] md:w-[130px] md:h-[42px]">
          <Anchor to="/cities">Back</Anchor>
        </button>
      </div>
    </div>
  );
}

