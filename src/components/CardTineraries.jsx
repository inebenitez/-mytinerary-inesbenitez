import { useState } from "react";

export default function ItinerariesCard({
  src,
  alt,
  text,
  id,
  tags,
  price,
  duration,
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
    <div className="w-1/2 flex flex-col p-6 m-6 bg-gray-200 rounded-xl shadow-xl">
      <h1 className="m-2 text-[20px] font-semibold text-center">{text}</h1>
      <img src={src} alt={alt} className="h-fit" />
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
      {showDetails && (
        <div className="flex flex-col m-2 p-2">
          <div className="lg:flex lg:flex-row lg:justify-between">
            <div className="lg:w-1/4">
              <h2 className="text-center text-sm font-bold text-indigo-500 mt-4 lg:text-lg">
                User
              </h2>
            </div>
            <div className="lg:w-1/4">
              <h2 className="text-center text-sm font-bold text-indigo-500 mt-4 lg:text-lg">
                Hashtags
              </h2>
              <h1 className="text-center">{tags}</h1>
            </div>
            <div className="lg:w-1/4">
              <h2 className="text-center text-sm font-bold text-indigo-500 mt-4 lg:text-lg">
                Duration
              </h2>
              <h1 className="text-center">{duration}</h1>
            </div>
            <div className="lg:w-1/4 flex flex-col items-center">
              {" "}
              <h2 className="text-center text-sm font-bold text-indigo-500 mt-4 lg:text-lg">
                Titulo
              </h2>
              <h1 className="text-center flex items-center">
                {price}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </h1>
            </div>
          </div>
          <div className="text-center text-sm font-bold text-indigo-500 mt-4 bg-indigo-500 lg:text-lg">
            <span className="text-white p-2 rounded-lg">
              Activities Under Construction
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
