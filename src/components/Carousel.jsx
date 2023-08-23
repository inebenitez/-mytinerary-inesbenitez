import { useEffect, useState } from "react";
import Arrow from "../components/Arrow";
import CardCity from "../components/CardCity";

export default function Carousel({ data }) {
  const cardsPerSlide = 4;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const totalSlides = Math.ceil(data.length / cardsPerSlide);
    const nextSlide = (currentSlide + 1) % totalSlides;

    const interval = setInterval(() => {
      setCurrentSlide(nextSlide);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, data.length, cardsPerSlide]);

  function directionSlide(direction) {
    const totalSlides = Math.ceil(data.length / cardsPerSlide);
    const increment = direction === "next" ? 1 : -1;
    const newSlide = (currentSlide + increment + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  }

  return (
    <div className="flex flex-row items-center justify-center w-full">
      <Arrow
        direction="M15.75 19.5L8.25 12l7.5-7.5"
        onClick={() => directionSlide("prev")}
      />
      <div className="w-4/5 pt-10">
        <div className="font-sans font-semibold">
          <p className="text-center">Popular MYTINERARIES!</p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center m-5 py-2">
          {data
            .slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide)
            .map((each) => (
              <CardCity
                key={each._id}
                _id={each._id}
                src={each.photo}
                alt={each.id}
                text={each.city}
              />
            ))}
        </div>
      </div>
      <Arrow
        direction="M8.25 4.5l7.5 7.5-7.5 7.5"
        onClick={() => directionSlide("next")}
      />
    </div>
  );
}

