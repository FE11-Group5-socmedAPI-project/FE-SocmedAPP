import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";

import PageHome from "../pages/PageHome";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   path: "/posts/:id_post",
  //   element: <Detail />,
  // },
  // {
  //   path: "/profil",
  //   element: <Profil />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
