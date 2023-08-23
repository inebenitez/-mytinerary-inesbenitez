import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"

export default function MainLayout({}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
