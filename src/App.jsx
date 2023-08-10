import MainLayout from "./layouts/MainLayout"
import { RouterProvider } from 'react-router-dom'
import router from "./router"

function App() {

  return (
    // <MainLayout>
    //   <Home/>      
    // </MainLayout>
    <RouterProvider router={router} />
  )
}

export default App
