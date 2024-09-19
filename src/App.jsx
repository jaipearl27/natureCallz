import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";

///// pages /////

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/*",
          element: <NotFound />,
        }
        ,
        {
          path:'/',
          element:<Footer/>
        },
        {
          path:'/about',
          element: <About/>
        },
       {
        path:'/PrivacyPolicy',
        element:<PrivacyPolicy/>
       }
      ],
    },

  ]);

  return (
    <>
      {/* <Toaster richColors containerClassName="overflow-auto" /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
