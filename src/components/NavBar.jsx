import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <header className="translucent-navbar flex justify-around items-center w-full h-[14vh]">
      <p className="w-[183px] h-[43px] font-sans font-bold text-[32px] text-[#1c1c1c] leading-[43px]">
        My Tinerary
      </p>
      <div className="flex relative items-center space-x-4 md:flex gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <nav className={"hidden md:flex gap-6 items-center"}>
          <Anchor
            to="/"
            className="w-[69px] h-[32px] text-[24px] font-bold leading-[31.92px]"
            href=""
          >
            Home
          </Anchor>
          <Anchor
            to="/cities"
            className="w-[69px] h-[32px] text-[24px] font-bold leading-[31.92px]"
            href=""
          >
            Cities
          </Anchor>
          <button className="flex items-center  w-[150px] h-[54px] bg-[#4f46e5] text-white text-[20px] font-bold py-[16px] px-[32px] rounded-[10px] leading-20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Login
          </button>
        </nav>
        <nav
          className={`h-3/6 fixed top-24 flex flex-col justify-around items-center w-2/4 md:hidden bg-white z-40 duration-1000 ${
            menuOpen ? "right-[0px]" : "right-[-100vw]"
          }`}
        >
          <Anchor
            to="/"
            className="w-[69px] h-[32px] text-[24px] font-bold leading-[31.92px]"
            href=""
          >
            Home
          </Anchor>
          <Anchor
            to="/cities"
            className="w-[69px] h-[32px] text-[24px] font-bold leading-[31.92px]"
            href=""
          >
            Cities
          </Anchor>
          <button className="flex items-center  w-[150px] h-[54px] bg-[#4f46e5] text-white text-[20px] font-bold py-[16px] px-[32px] rounded-[10px] leading-20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}




// return (
//   <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//       <a href="https://flowbite.com/" className="flex items-center">
//         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//           My Tinerary
//         </span>
//       </a>
//       <div className="flex md:order-2">
//         <button
//           type="button"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 inline mr-2"
//             onClick={() => setMenuOpen(!menuOpen)}

//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//             />
//           </svg>
//           LogIn
//         </button>
//         <button
//           data-collapse-toggle="navbar-sticky"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-sticky"
//           aria-expanded="false"
//         >
//           <span class="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//       </div>
//       <div
//         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//         id="navbar-sticky"
//       >
//         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <Anchor to="/" className="font-bold" href="">
//           Home
//           </Anchor>
//         </li>
//           <li>
//               <Anchor to="/cities" className="font-bold" href="">
//                 Cities
//               </Anchor>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );
// }