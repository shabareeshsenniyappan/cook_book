import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeSearchPage from "./Pages/RecipeSearch/RecipeSearchPage";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <RecipeSearchPage />,
  },
  {
    path: "/details:id",
    element: <RecipeDetails />,
  },
]);
