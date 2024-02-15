import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import MainContainers from "../Containers/MainContainer/MainContainers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <MainContainers></MainContainers>,
        }
      ]
    },
  ]);

  export default router