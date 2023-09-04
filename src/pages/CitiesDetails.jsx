import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import CardCityDetails from "../../src/components/CardCityDetail";

const { read_itineraries_from_city } = itinerary_actions;

export default function CitiesDetail({ src, alt, text, _id, description }) {
  const [show, setShow] = useState(false);
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const itineraries_from_city = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_itineraries_from_city({ city_id: id }));
  }, [dispatch, id]);

  const backgroundImage = itineraries_from_city && itineraries_from_city[0]
    ? itineraries_from_city[0].city_id.photo
    : "";

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="bg-cover bg-center w-full h-[600px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <CardCityDetails></CardCityDetails>
      <p>{description}</p> 
      </div>
    </div>
  );
}
