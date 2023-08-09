import Arrow from "../components/Arrow";
import CardCity from "../components/CardCity";
import { useState } from "react";

export default function Carousel({ data }) {
  let [counter, setCounter] = useState(0);

  function directionSlide(direction) {
    const increment = direction === "next" ? 4 : -4; {/*increment determina 4 si es next y -4 si es prev */}
    const newCounter = (counter + increment + data.length) % data.length; {/* mantiene el valor dento del limite del arreglo */}
    setCounter(newCounter); {/*Actualiza la nueva posicion */} 
  }
  
  return (
<>
<Arrow direction="M15.75 19.5L8.25 12l7.5-7.5"
  onClick={() => directionSlide("prev")}
/>
<div className="w-2/5">
  <div className="flex flex-wrap justify-center m-5 py-10">
    {data.slice(counter, counter + 4).map(each => (
      <CardCity key={each.id} src={each.photo} alt={each.id} text={each.city} />
    ))}
  </div>
</div>
<Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"
  onClick={() => directionSlide("next")}
/>
</>
);
}


