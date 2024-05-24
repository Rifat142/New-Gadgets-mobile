import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Roots from "./Roots/Roots";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import MoreComment from "./pages/MoreComment";
import CardDetails from "./pages/CardDetails";
import AuthProvider from "./Authprovider/Authprovider";
import PrivateRoutes from "./Roots/PrivateRoutes";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/about-us",
        element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>,
      },
      {
        path:'/add-product',
        element:<AddProduct></AddProduct>
      },
      {
        path: "/comment",
        element: <PrivateRoutes><MoreComment></MoreComment></PrivateRoutes>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
        loader: () => fetch('/data.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
