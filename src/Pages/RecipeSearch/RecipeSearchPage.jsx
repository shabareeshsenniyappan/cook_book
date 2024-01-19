import React, { useEffect, useState } from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import CardContainers from "../../Components/CardContainers/CardContainers";
import { getRandomRecipes } from "../../Utils/apiServices";

function RecipeSearchPage() {
  const [randomRec, setrandomRec] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    loadRandomRecipies();
  }, []);

  const loadRandomRecipies = () => {
    setloading(true);
    getRandomRecipes(10, 1)
      .then((e) => {
        setrandomRec([...randomRec, ...e?.data?.recipes]);
        setloading(false);
      })
      .catch(() => setloading(false));
  };
  // console.log(randomRec);
  return (
    <div>
      <HeaderComponent />
      <div></div>
      <CardContainers dataToShown={randomRec} />
    </div>
  );
}

export default RecipeSearchPage;
