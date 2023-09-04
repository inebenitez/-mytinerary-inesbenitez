import { Link as Anchor } from "react-router-dom";

export default function CardCarousel({ src, alt, text, pais,_id }) {
    return (
        <div key={_id} className="relative md:w-1/2 relative flex flex-col pt-40 px-4 pb-4">
            <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover px-1 pb-2" />
            <div className="absolute inset-1 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-2xl font-bold text-white">{text}</h3>
            <div className="z-10 flex flex-col items-start gap-2 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                    <p> {pais}</p>
                </div>
                <button className="mt-auto font-bold bg-[#4f46e5] text-white rounded-[8px] text-xs self-start w-[90px] h-[30px]
                    md:rounded-[8px] text-sm self-start w-[130px] h-[42px]">
                    <Anchor to={`/city/?id=${_id}`}>View More</Anchor>
                </button>
            </div>
        </div>
    );
}


