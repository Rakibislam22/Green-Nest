import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";


const Router = createBrowserRouter([
    {
        path: "/", 
        Component:MainLayout,
        children: [
            {path: "/", Component: Home},
            {path: "/plants", Component: Plants,
                loader: () => fetch('plants.json')
            }
        ]
    },
    

])

export default Router;