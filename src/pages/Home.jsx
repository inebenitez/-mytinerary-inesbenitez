import { useState,useEffect } from "react";
import Carousel from "../components/Carousel"
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from '../apiUrl';

export default function Home() {

  // const [show,setShow] = useState(true)
  const [data,setData] = useState([])
  useEffect(
    ()=> {
      axios(apiUrl+ 'cities/carousel')
      // .then((res)=>console.log(res.data.data_carousel))
        .then((res)=>setData(res.data.data_carousel))
        .catch(err=>console.log(err))
  }, []);

  return (
    <main className="min-h-[74vh]">
      <div className="font-sans flex flex-col px-4
          md:flex-row justify-center items-center">
        <div className="flex flex-col m-2
          md:">
          <h1 className="font-bold text-xl text-center
            md:text-[34px] text-justify p-2">Find the perfect destination</h1>
          <p className="font-sans text-sm m-2
            md:text-lg">
            Our app will help you find the perfect path for your next trip. With an easy to use interface and a host of itinerary options, planning your next trip has never been easier.
          </p>
          <button className="font-bold bg-[#4f46e5] text-white rounded-[8px] text-xs self-start w-[90px] h-[34px]
            md:rounded-[8px] text-sm self-start w-[130px] h-[42px]">
            <Anchor to="/cities">View More</Anchor>
          </button>
        </div>
        <Carousel data={data} />
      </div>
      <div className="px-10 m-2 text-center font-sans font-semibold text-sm
          md:text-lg">
        <p>
          "Find your perfect trip, designed by insiders who know and love their
          cities!"
        </p>
      </div>
    </main>
  );
}