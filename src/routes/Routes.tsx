import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import PageHome from "../pages/PageHome";

const router = createBrowserRouter([
  {
    path: "/PageHome",
    element: <PageHome />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
