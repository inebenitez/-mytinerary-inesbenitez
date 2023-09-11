import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout' ;
import Cities from "./pages/Cities" ;
import CitiesDetails from "./pages/CitiesDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter( [
    {
        path: '/' , 
        element: <MainLayout/>,
        children: [
            { path: '/', element: <Home/> },
            { path: '/index', element: <Home/> },
            { path: '/home', element: <Home/> },
            { path: '/cities', element: <Cities/>},
            { path: '/auth/signin', element: <SignIn/>},
            { path: '/auth/signup', element: <SignUp/>},
            { path:'/cities/:id', element:<CitiesDetails/>},

        ]
    },  
        ],
)

export default router