import { useState, useEffect, useRef } from "react";
import CardCarousel from "../components/CardCarousel";
import Footer from "../components/Footer"
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const dispatch = useDispatch();
  const [refSearch, setSearch] = useState({ city: "" });

  const text = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleFilter(e) {
    const { value } = e.target;
    setSearch((prevState) => ({
      ...prevState,
      city: value.trim(),
    }));
  }

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    dispatch(read_cities({ filtered: removeAccents(refSearch.city) }));
  }, [refSearch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [cities]);

  const cardsPerGroup = 3;
  const groups = Array.from(
    { length: Math.ceil(cities.length / cardsPerGroup) },
    (_, index) =>
      cities.slice(index * cardsPerGroup, (index + 1) * cardsPerGroup)
  );
  return (
    <div className="flex flex-col items-center">
      {/* Parte superior con título y foto de fondo */}
      <div
        className="w-full h-[150px] bg-cover bg-center flex flex-col items-center relative"
        style={{
          backgroundImage: `url('${cities[currentImageIndex]?.photo}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h1 className="text-white drop-shadow-xl shadow-black text-3xl font-bold p-4">
          Cities
        </h1>
        <p className="font-bold text-white drop-shadow-xl shadow-black text-lg md:text-xl">
          Collection of the most beautiful places and experiences
        </p>
      </div>

      {/* Parte inferior con las tarjetas y el campo de búsqueda */}
      <div className="w-4/5 py-10">
        <input
          ref={text}
          name="text"
          id="text"
          onKeyUp={handleFilter}
          placeholder="Search your city..."
          className="border-2 border-blue-500 mt-4 flex mx-auto p-[0.5em] rounded"
        />
        {cities.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[300px] font-bold text-lg text-neutral-500">
            Not Found Results
          </div>
        ) : (
          groups.map((group, groupIndex) => (
            <div key={groupIndex} className="md:flex justify-center m-5 py-2">
              {group.map((each) => (
                <CardCarousel
                  _id={each._id}
                  src={each.photo}
                  alt={each.id}
                  text={each.city}
                  pais={each.country}
                  className="md:w-1/4 mx-1"
                />
              ))}
            </div>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
}