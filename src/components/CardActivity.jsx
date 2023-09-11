import React from 'react';

export default function CardActivity({ activity }) {
  return (
        <div
          className="text-center text-sm mt-4 lg:text-lg"
          key={activity}
        >
          <span className="text-white p-2 rounded-lg">
            <div className="relative md:w-1/4 relative flex flex-col pt-40 px-4 pb-4">
              <img
                src={activity}
                alt={activity}
                className="absolute inset-0 h-full w-full object-cover px-1 pb-2"
              />
              <div className="absolute inset-1 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-2xl font-bold text-white">
                {activity}
              </h3>
            </div>
          </span>
        </div>        
      )
};

