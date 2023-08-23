export default function CardCity({ src, alt, text,_id }) {
  return (
    <div key={_id} className="relative md:w-1/2 relative flex flex-col pt-40 px-4 pb-4">
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover px-1 pb-2" />
      <div className="absolute inset-1 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-2xl font-bold text-white">{text}</h3>
    </div>
  );
}
