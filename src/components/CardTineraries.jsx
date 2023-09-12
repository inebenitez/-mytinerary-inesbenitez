import { useState } from "react";
import CardActivity from "../components/CardActivity";

export default function CardTineraries({
  src,
  alt,
  text,
  tags,
  price,
  duration,
  user,
  each,
}) {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const toggleLike = () => {
    setLikes(likes + (likes === 0 ? 1 : -1));
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative w-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col">
      {/* Imagen*/}
      <div className="relative pt-8">
        <img src={src} alt={alt} className="w-full h-auto object-cover " />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      </div>

      {/* Titulo de itinerario*/}
      <div className="px-6 py-4 bg-gray-900">
        <h3 className="text-xl md:text-2xl font-bold text-white">{text}</h3>
        <div className="flex items-start gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-gray-300">{text}</p>
        </div>
      </div>

      {/* Contenido Itinerarios */}
      <div className="flex flex-col py-6 px-4">
        <div className="lg:flex lg:flex-row lg:justify-between">
          {/* Image */}
          <div className="lg:w-1/4 flex flex-col items-center justify-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* User */}
          <div className="lg:w-1/4 flex flex-col items-center justify-center">
            <div className="flex items-center">
              <svg
                className="my-auto h-5 fill-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
              </svg>
              <span className="text-center font-bold text-gray-600 ml-2">
                User
              </span>
            </div>
            <div className="text-center mt-2 text-sm text-gray-400">{user}</div>
          </div>

          {/* Hashtag */}
          <div className="lg:w-1/4 flex flex-col items-center justify-center">
            <svg
              className="mr-3 fill-gray-500/95"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
            </svg>
            <div className="text-center font-bold text-gray-600 ml-2"> Hashtag </div>
            <div className="text-center mt-2 text-sm text-gray-400">{tags}</div>
          </div>

          {/* Duration */}
          <div className="lg:w-1/4 flex flex-col items-center justify-center">
            <svg
              className="mr-3 fill-gray-500/95"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5.68,19.74C7.16,20.95 9,21.75 11,21.95V19.93C9.54,19.75 8.21,19.17 7.1,18.31M13,19.93V21.95C15,21.75 16.84,20.95 18.32,19.74L16.89,18.31C15.79,19.17 14.46,19.75 13,19.93M18.31,16.9L19.74,18.33C20.95,16.85 21.75,15 21.95,13H19.93C19.75,14.46 19.17,15.79 18.31,16.9M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12M4.07,13H2.05C2.25,15 3.05,16.84 4.26,18.32L5.69,16.89C4.83,15.79 4.25,14.46 4.07,13M5.69,7.1L4.26,5.68C3.05,7.16 2.25,9 2.05,11H4.07C4.25,9.54 4.83,8.21 5.69,7.1M19.93,11H21.95C21.75,9 20.95,7.16 19.74,5.68L18.31,7.1C19.17,8.21 19.75,9.54 19.93,11M18.32,4.26C16.84,3.05 15,2.25 13,2.05V4.07C14.46,4.25 15.79,4.83 16.9,5.69M11,4.07V2.05C9,2.25 7.16,3.05 5.68,4.26L7.1,5.69C8.21,4.83 9.54,4.25 11,4.07Z" />
            </svg>
            <div className="text-center font-bold text-gray-600">Duration</div>
            <div className="text-center mt-2 text-sm text-gray-400">Min: {duration}
            </div>
          </div>

          {/* Price */}
          <div className="lg:w-1/4 flex flex-col items-center justify-center">
            <svg
              className="mr-3 fill-gray-500/95"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z" />
            </svg>
            <div className="text-center font-bold text-gray-600">Price </div>
            <div className="text-center mt-2 text-sm text-gray-400">$ {price}  </div>
          </div>
        </div>

        {/*Likes*/}
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-row flex-start">
            <svg
              onClick={toggleLike}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 cursor-pointer ${
                likes > 0 ? "text-red-500" : "text-gray-400"
              }`}
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <span className="ml-2">{likes}</span>
          </div>
          <svg
            onClick={toggleDetails}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            {showDetails ? (
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            )}
          </svg>
        </div>
        {/* activities */}
        {showDetails && (
          <div className="flex flex-col">
            <CardActivity  itinerary_id={each._id} />
          </div>
        )}
      </div>
    </div>
  );
}
