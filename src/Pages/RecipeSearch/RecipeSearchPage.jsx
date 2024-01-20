import React, { useEffect, useState } from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import CardContainers from "../../Components/CardContainers/CardContainers";
import { getRandomRecipes, getRecipesOnSearch } from "../../Utils/apiServices";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./recipeSearch.module.css";
import LoadingComponent from "../../Components/LoadingComponent/LoadingComponent";

function RecipeSearchPage() {
  const [randomRec, setrandomRec] = useState([]);
  const [favRec, setFavRec] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchedRecipe, setsearchedRecipe] = useState("");
  const [searchedRecipeValue, setsearchedRecipeValue] = useState([]);

  const [offSet, setoffSet] = useState({ offset: 0, total: 0 });
  useEffect(() => {
    if (!searchedRecipe) {
      setloading(true);
      loadRandomRecipies();
      setloading(false);
    }
  }, []);

  const loadRandomRecipies = () => {
    getRandomRecipes(10, 1)
      .then((e) => {
        setrandomRec([...randomRec, ...e?.data?.recipes]);
      })
      .catch(() => setloading(false));
  };

  const onFavClick = (idToFav) => {
    if (searchedRecipe) {
      const favItems = searchedRecipeValue.filter(
        (item) => item.id === idToFav
      );
      setFavRec([...favRec, ...favItems]);
    } else {
      const favItems = randomRec.filter((item) => item.id === idToFav);
      setFavRec([...favRec, ...favItems]);
    }
  };

  const onSearchEntered = (e) => {
    setsearchedRecipe(e);
    setloading(true);
    getRecipesOnSearch(e, offSet?.offset)
      .then((res) => {
        setoffSet({
          offset: res?.data?.offset,
          total: res?.data?.totalResults,
        });
        setsearchedRecipeValue([...res?.data?.results]);
        setloading(false);
      })
      .catch((res) => setloading(false));
  };

  const onSearchScrol = () => {
    getRecipesOnSearch(searchedRecipe, offSet?.offset + 1).then((res) => {
      setoffSet({ offset: res?.data?.offset, total: res?.data?.totalResults });
      setsearchedRecipeValue([...searchedRecipeValue, ...res?.data?.results]);
    });
  };

  console.log(searchedRecipeValue, "searchVal");
  return (
    <div>
      <HeaderComponent />

      <div className={styles.searchBar}>
        <SearchBar handleEnter={onSearchEntered} />
      </div>
      {favRec?.length > 0 && (
        <CardContainers
          dataToShown={favRec}
          heading={"Favourite  Recipes"}
          favClickedComp={() => {}}
          isFav={true}
        />
      )}
      {loading ? (
        <LoadingComponent />
      ) : searchedRecipe ? (
        <InfiniteScroll
          dataLength={searchedRecipeValue.length}
          next={onSearchScrol}
          hasMore={offSet.total / 10 > offSet.offset}
          loader={<LoadingComponent />}
        >
          <CardContainers
            isSearch={true}
            dataToShown={searchedRecipeValue}
            heading={`Search result - ${searchedRecipe}`}
            favClickedComp={onFavClick}
          />
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          dataLength={randomRec.length}
          next={loadRandomRecipies}
          hasMore={true}
          loader={<LoadingComponent />}
        >
          <CardContainers
            dataToShown={randomRec}
            heading={"Not Sure What To Cook ?"}
            favClickedComp={onFavClick}
          />
        </InfiniteScroll>
      )}
    </div>
  );
}

export default RecipeSearchPage;
