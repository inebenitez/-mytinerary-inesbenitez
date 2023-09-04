import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import CardTinerary from "../components/CardTineraries";
import NoItinerary from "../components/NoItinerary"; 

const { read_itineraries_from_OneCity } = itinerary_actions;

export default function CityDetailWithItineraries({src,alt,text,id,description,duration,price,tags,user
}) {
  const [show, setShow] = useState(false);
  const itineraries_from_city = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  console.log(itineraries_from_city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_itineraries_from_OneCity({ city_id: id }));
  }, [dispatch, id]);

  const toggleShow = () => {
    setShow(!show);
  };

  const backgroundImage = itineraries_from_city && itineraries_from_city[0]
    ? itineraries_from_city[0].city_id.photo
    : "";

    return (
      <div className="flex flex-col items-center min-h-screen">
        <div className="bg-cover bg-center w-full h-[600px]" style={{backgroundImage: `url(${backgroundImage})`}}>
        </div>
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-[20px] font-semibold text-center lg:text-[24px] xl:text-[28px]">
            {text}
          </h1>
          <img src={src} alt={alt} className="my-5 shadow-lg" />
          <p className="text-[14px] text-justify md:text-[16px] lg:text-[18px] xl:text-[20px]">
            {description}
          </p>
          <button onClick={toggleShow} className="bg-indigo-500 px-4 py-2 my-8 rounded-lg text-slate-200 font-semibold hover:bg-indigo-700 hover:text-white">
            {show ? "Hide itineraries" : "View itineraries"}
          </button>
          {show ? (
            itineraries_from_city.length > 0 ? (
              itineraries_from_city.map((each, index) => (
                <CardTinerary
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