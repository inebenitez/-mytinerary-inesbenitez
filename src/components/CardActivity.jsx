import React, { useEffect, useState } from "react";
import activity_actions from "../store/actions/activities";
import { useDispatch, useSelector } from "react-redux";
const { read_activities_itinerary } = activity_actions;

export default function Activity({ itinerary_id }) {
  const dispatch = useDispatch()
  // const activities = useSelector(
  //   (store) => store.activities.activitiesItinerary
  // )
  let [activities, setActivity] = useState([]);
  
  useEffect(() => {
    dispatch(read_activities_itinerary({ itinerary_id: itinerary_id }))
    .then(res=>setActivity(res.payload.activitiesItinerary)) 
    .catch(err=>console.log(err))
  }, []);

return (
  <div className="flex flex-row text-center text-sm mt-4 lg:text-lg">
    {(activities) ? activities.map((each) => (
      <div key={each._id} className="text-white p-2 rounded-lg w-1/3">
        <div className="relative flex flex-col">
          <img
            src={each.photo}
            alt={each.name}
            className="h-60 w-full object-cover rounded-t-lg"
          />
          <div className="bg-gradient-to-t from-gray-900 via-gray-900/40 text-center py-2 absolute inset-x-0 bottom-0 rounded-b-lg">
            {each.name}
          </div>
          <h3 className="text-2xl font-bold text-white mt-2 text-center">{each.title}</h3>
        </div>
      </div>
    )) : <h3>Activity not found</h3>}
  </div>
);
}
