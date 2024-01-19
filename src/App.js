import "./App.css";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import LandingPage from "./Pages/LandingPage/LandingPage";
import RecipeSearchPage from "./Pages/RecipeSearch/RecipeSearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<RecipeSearchPage />} />
        <Route path="/detail/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
