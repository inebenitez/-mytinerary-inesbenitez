import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import city_actions from "../store/actions/cities";
import itinerary_actions from "../store/actions/itineraries";
import CardCityDetails from "../../src/components/CardCityDetail";

const { read_city } = city_actions;
const { read_itineraries_from_city } = itinerary_actions;

export default function CitiesDetail({  }) {
  const city = useSelector((store) => store.cities.city);
  console.log(city);
  const [show, setShow] = useState(false);
  const params = useParams();

  const itineraries_from_city = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_city({ id: params.id }));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${city.photo})` }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="flex-col bg-pink-700">{city.city}</h1>
          <h1 className="flex-col bg-green-400">{city.city}</h1>
        </div>
      </div>
      <div>
        <CardCityDetails city={params} />
      </div>
    </div>
  );
}
