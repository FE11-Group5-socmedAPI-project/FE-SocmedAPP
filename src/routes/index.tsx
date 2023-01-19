import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

//import { useDispatch } from "react-redux/es/exports";

import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PageHome from "../pages/PageHome";
import { ThemeContext } from "../utils/context";

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/posts/:id_post",
    element: <Detail />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
   {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  //const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getFavMovies = localStorage.getItem("FavMovie");
    if (getFavMovies) {
      //dispatch(setFavorites(JSON.parse(getFavMovies)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
