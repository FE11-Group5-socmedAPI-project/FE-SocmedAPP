import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios, { AxiosHeaders } from "axios";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import PageHome from "../pages/PageHome";

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${checkToken}`;
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: "/pagehome",
      element: <PageHome />,
    },
    {
      path: "/login",
      element: checkToken ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/pagehome",
      element: checkToken ? <PageHome /> : <Navigate to="/login" />,
    },
    {
      path: "/register",
      element: checkToken ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
