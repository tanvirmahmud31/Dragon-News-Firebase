import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import DetailNews from "../Pages/DetailNews/DetailNews";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path:"",
            element:<Home></Home>
        },
        {
            path:"/category/:id",
            element:<CategoryNews></CategoryNews>,
            loader:()=>fetch('/news.json'),
            hydrateFallbackElement:<Loading></Loading>
        }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>,
      },
       {
        path:"/auth/register",
        element:<Register></Register>,
      },
    ]
  },
  {
    path: "/detailNews/:id",
    element: <PrivateRoute>
      <DetailNews></DetailNews>
    </PrivateRoute>,
    loader:()=>fetch('/news.json'),
    hydrateFallbackElement:<Loading></Loading>,
  },
  {
    path: "/*",
    element: <div>error 404</div>,
  },
]);

export default router