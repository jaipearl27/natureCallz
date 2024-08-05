import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
        },
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
