import NavBar from "../components/NavBar"

export default function MainLayout({children}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
    <NavBar/>
      {children}
    </div>
  )
}
