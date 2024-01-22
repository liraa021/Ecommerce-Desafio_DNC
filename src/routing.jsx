import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LISTA_TAREFAS } from "./mock/bd.mock";

import Home from "./Home/Home";

const Routing = () => {
  const Routes = createBrowserRouter([
    { path: `/`, element: <Home data={LISTA_TAREFAS} /> },
  ]);

  return <RouterProvider router={Routes}></RouterProvider>;
};

export default Routing;
