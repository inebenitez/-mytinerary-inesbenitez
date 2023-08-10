import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout' ;
import Cities from "./pages/Cities" ;
import CitiesDetails from "./pages/CitiesDetails";
import Login from './pages/Login' ;

const router = createBrowserRouter( [
    {
        path: '/' , 
        element: <MainLayout/>,
        children: [
            { path: '/', element: <Home/> },
            { path: '/index', element: <Home/> },
            { path: '/home', element: <Home/> },
            { path: '/cities', element: <Cities/>},
            { path: '/city', element: <CitiesDetails/>},
            { path: '/login', element: <Login/>},
        ]
    },  
        ],
)

export default router