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

import AuthProvider from "./Authprovider/Authprovider";
import PrivateRoutes from "./Roots/PrivateRoutes";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import MyCart from "./pages/MyCart";
import ProductDetails from "./pages/ProductDetails";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>, 
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
        element: (
          <PrivateRoutes>
            <AboutUs></AboutUs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-product",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
      },

      {
        path: "/update-items",
        element: <UpdateProduct></UpdateProduct>,
      },

      {
        path: "/comment",
        element: (
          <PrivateRoutes>
            <MoreComment></MoreComment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/product-details/:bname",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://gadgets-mobile-server.vercel.app/product/${params.bname}`),
      },
      {
        path: `/details/:id`,
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({params})=>
          fetch (`https://gadgets-mobile-server.vercel.app/products/${params.id}`)
       
          
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
