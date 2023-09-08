import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import CardTineraries from "../components/CardTineraries";
import NoItinerary from "../components/NoItinerary";

const { read_itineraries_from_city } = itinerary_actions;

export default function CityDetailWithItineraries({ city }) {
  const [show, setShow] = useState(false);
  const itineraries = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  console.log(itineraries, " card de city details");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_itineraries_from_city({ city_id: city }));
  }, []);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-500">
      <div className="flex flex-col bg-yellow-600">
        <button
          onClick={toggleShow}
          className="bg-indigo-500 px-4 py-2 my-8 rounded-lg text-slate-200 font-semibold hover:bg-indigo-700 hover:text-white"
        >
          {show ? "Hide itineraries" : "View itineraries"}
        </button>
      </div>
      <div>
        {show ? (
          itineraries.length > 0 ? (
            itineraries.map((each, index) => (
              <CardTineraries
                key={index}
                src={each.photo}
                alt={each.city_id}
                text={each.name}
                duration={each.duration}
                price={each.price}
                tags={each.tags}
                user={each.city_id.admin_id.name}
              />
            ))
          ) : (
            <NoItinerary />
          )
        ) : null}
      </div>
    </div>
  );
}
