// import React, { useState, useEffect } from 'react';
// import activity_actions from '../store/actions/activities';
// import { useDispatch } from 'react-redux';
// const { read_activities_itinerary } = activity_actions;

// export default function CardActivity({ itinerary_id }) {
//   const dispatch = useDispatch();
//   const [activity, setActivity]=useState([]);
//   useEffect(() => {
//       dispatch(read_activities_itinerary({ itinerary_id }))
//       .then(response => setActivity(response.payload.activities)
//       ); 
//   }, [itinerary_id]);
  
//   return (
//     <div className="bg-red-500 text-center text-sm mt-4 lg:text-lg">
//         <div
//           className="text-white p-2 rounded-lg">
//           <div className="relative md:w-1/4 relative flex flex-col pt-40 px-4 pb-4">
//             <img className="absolute inset-0 h-full w-full object-cover px-1 pb-2"/>
//             <div className="absolute inset-1 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
//             <h3 className="z-10 mt-3 text-2xl font-bold text-white">
//             </h3>
//           </div>
//         </div>
//       </div>
// ;


//     return (
//         <div className="bg-red-500 text-center text-sm mt-4 lg:text-lg">
//             {activity?.map(each => (
//                 <div key={each._id} className="text-white p-2 rounded-lg">
//                   <div className="relative md:w-1/4 relative flex flex-col pt-40 px-4 pb-4">
//                     <img className="w-[240px] h-[130px]" src={each.photo} alt={each.name} />
//                     <p className="text-[16px] font-bold">{each.name}</p>
//                   <div/>
//                 </div>
//             ))}
//         </div>
//     );


import React, { useEffect, useState } from 'react';
import activity_actions from '../store/actions/activities';
import { useDispatch } from 'react-redux';
const { read_activities } = activity_actions;

export default function Activity({ itinerary_id }) {
    const dispatch = useDispatch();
    const [activity, setActivity]=useState([]);
    useEffect(() => {
        dispatch(read_activities({ itinerary_id }))
        .then(response => setActivity(response.payload.activities)
        ); 
    }, [itinerary_id]);
    return (
        <div className="w-[260px] h-[300px] mb-4 flex flex-row items-center  justify-start bg-slate-100 mb-4v rounded-md  sm:w-[750px]">
            {activity?.map(each => (
                <div key={each._id} className="w-5/12 flex flex-col rounded-xl h-[190px] items-center p-2 m-4 bg-slate-400">
                    <img className="w-[240px] h-[130px]" src={each.photo} alt={each.name} />
                    <p className="text-[16px] font-bold">{each.name}</p>
                </div>
            ))}
        </div>
    );
}