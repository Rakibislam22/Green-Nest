import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyProfile from "../pages/MyProfile";
import PlantDetails from "../pages/PlantDetails";
import PrivateRoute from "../provider/PrivateRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: "/", Component: Home },
            {
                path: "/plants", Component: Plants,
                loader: () => fetch('/plants.json')
            },
            {
                path: "/myprofile",
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path: "/plant-details/:id",
                element: <PrivateRoute> <PlantDetails></PlantDetails> </PrivateRoute>,
                loader: () => fetch('/plants.json')
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { path: "/auth/login", Component: Login },
            { path: "/auth/signup", Component: Signup }
        ]
    }


])

export default Router;