import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import city_actions from "../store/actions/cities";
import itinerary_actions from "../store/actions/itineraries";
import CardCityDetails from "../../src/components/CardCityDetail";

const { read_city } = city_actions;
const { read_itineraries_from_city } = itinerary_actions;

export default function CitiesDetail({}) {
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
<div className="flex flex-col items-center">
  {/* Parte superior con título y foto de fondo */}
  <div className="w-full h-[500px] bg-cover bg-center relative" style={{ backgroundImage: `url(${city.photo})` }}>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">{city.city}</h1>
    {/* <h2 className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold">{description}</h2> */}
  </div>

      {/* Parte inferior con las tarjetas y el campo de búsqueda */}
      <div>
        <CardCityDetails city={params} />
      </div>
    </div>
  );
}
