import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function CitiesDetails() {
  
  const setCiudades = async (data) => { setCities(data)}
  const [cities, setCities] = useState([]);
  const [reEffect,] = useState(true);

  const queryParameters = new URLSearchParams(window.location.search);
  //obtiene el valor del parametro id, es el unico parametro q pasa en la URL.
  const idCity = queryParameters.get("id");
  console.log(idCity);
  useEffect( () => {
    axios(apiUrl + "cities/" + idCity)
      .then(async (res) => {
        let listaCity = [];//se crea variable temporal tipo array
        listaCity.push(res.data.response);//se añade el objeto al array
        console.log(listaCity);
        await setCiudades(listaCity);
      } )
      .catch((err) => console.log(err));
  }, [reEffect]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: cities.length > 0 ? `url(${cities[0].photo})` : "",
      }}
    >
      {cities.length > 0 && (
        <div className="text-center text-white p-8 bg-blue-500">
          <h1 className="text-4xl font-bold">{cities[0].city}</h1>
          <p className="mt-4">{cities[0].description}</p>
          <p className="text-lg md:text-xl m-4">Under construction.</p>
          <button className="font-bold bg-[#4f46e5] text-white rounded-[8px] text-xs self-start w-[120px] h-[36px]
            md:rounded-[8px] text-sm self-start w-[130px] h-[42px]">
            <Anchor to="/cities">Back to Cities</Anchor>
          </button>
        </div>
      )}
    </div>
  );
}
