import Carousel from "../components/Carousel"
import { Link as Anchor } from "react-router-dom";


export default function Home() {

  let data = [
    { id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: 'america2', city: "New York", photo: "/img/america/newyork.jpg" },
    { id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
    { id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: 'asia1', city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: 'asia2', city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: 'asia3', city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: 'asia4', city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: 'europe1', city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: 'europe2', city: "London", photo: "/img/europe/london.jpg" },
    { id: 'europe3', city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: 'europe4', city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: 'oceania1', city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: 'oceania2', city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: 'oceania3', city: "Suva", photo: "/img/oceania/suva.jpg" },
    { id: 'oceania4', city: "Wellington", photo: "/img/oceania/wellington.jpg" }
  ]

return (
  <main className="min-h-[85vh]">
    <div className="flex flex-col md:flex-row justify-center items-center px-10">
      <div className="w-full md:w-2/5 h-1/3 flex flex-col justify-between items-center md:items-start gap-10 ">
        <h1 className="font-sans font-bold text-[48px]">
          Find the perfect destination
        </h1>
        <p className="font-sans font-semibold	text-[20px]">
          Our app will help you find the perfect path for your next <br />
          trip. With an easy-to-use interface and a host of itinerary <br />
          options, planning your next trip has never been easier. 
        </p>
        <button className="w-[1/4] bg-[#4f46e5] text-white text-[18px] py-[16px] px-[20px] rounded-[8px] self-start md:w-[250px] h-[60px]">
          <Anchor to="/cities">View More</Anchor>
        </button>
      </div>
      <Carousel data={data} />
    </div>
    <div className="font-semibold italic flex justify-center items-center">
      <p>
        "Find your perfect trip, designed by insiders who know and love their
        cities!"
      </p>
    </div>
  </main>
);
}