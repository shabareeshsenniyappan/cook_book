import React, { useEffect, useState } from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import CardContainers from "../../Components/CardContainers/CardContainers";
import { getRandomRecipes } from "../../Utils/apiServices";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./recipeSearch.module.css";
import LoadingComponent from "../../Components/LoadingComponent/LoadingComponent";

function RecipeSearchPage() {
  const [searchedRecipe, setsearchedRecipe] = useState();
  const [randomRec, setrandomRec] = useState([]);
  const [favRec, setFavRec] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    loadRandomRecipies();
    setloading(false);
  }, []);

  const loadRandomRecipies = () => {
    getRandomRecipes(10, 1)
      .then((e) => {
        setrandomRec([...randomRec, ...e?.data?.recipes]);
      })
      .catch(() => setloading(false));
  };

  const onFavClick = (idToDelete) => {
    const updatedItems = randomRec.filter((item) => item.id !== idToDelete);
    const favItems = randomRec.filter((item) => item.id === idToDelete);
    setrandomRec([...updatedItems]);
    setFavRec([...favRec, ...favItems]);
  };

  const onSearchEntered = () => {};
  return (
    <div>
      <HeaderComponent />

      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      {favRec?.length > 0 && (
        <CardContainers
          dataToShown={favRec}
          heading={"Favro  Recipies"}
          favClickedComp={() => {}}
          isFav={true}
        />
      )}
      {loading ? (
        <LoadingComponent />
      ) : (
        <InfiniteScroll
          dataLength={randomRec.length}
          next={loadRandomRecipies}
          hasMore={true}
          loader={<LoadingComponent />}
        >
          <CardContainers
            dataToShown={randomRec}
            heading={"Find The New Recipies"}
            favClickedComp={onFavClick}
          />
        </InfiniteScroll>
      )}
    </div>
  );
}

export default RecipeSearchPage;
