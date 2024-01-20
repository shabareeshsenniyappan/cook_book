import React, { useEffect, useState } from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import CardContainers from "../../Components/CardContainers/CardContainers";
import { getRandomRecipes, getRecipesOnSearch } from "../../Utils/apiServices";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./recipeSearch.module.css";
import LoadingComponent from "../../Components/LoadingComponent/LoadingComponent";
import filter from "../../Utils/Icons/filter.png";

function RecipeSearchPage() {
  const [randomRec, setrandomRec] = useState([]);
  const [favRec, setFavRec] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchedRecipe, setsearchedRecipe] = useState("");
  const [searchedRecipeValue, setsearchedRecipeValue] = useState([]);

  const [offSet, setoffSet] = useState({ offset: 0, total: 0 });
  const [showFilter, setshowFilter] = useState(false);
  const [filetValues, setfiletValues] = useState({
    diet: "",
    cuisines: "",
    type: "",
  });

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    if (filetValues?.[e.target.name].includes(e?.target?.value))
      setfiletValues({ ...filetValues, [e.target.name]: "" });
    else
      setfiletValues({
        ...filetValues,
        [e.target.name]: e.target.value.toLowerCase(),
      });
  };
  useEffect(() => {
    if (!searchedRecipe) {
      setloading(true);
      loadRandomRecipies();
      setloading(false);
    }
  }, []);

  const loadRandomRecipies = () => {
    getRandomRecipes(10)
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

  const onSearchEntered = async (e) => {
    setsearchedRecipe(e);
    setloading(true);
    await getRecipesOnSearch(e, offSet?.offset, filetValues)
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
    getRecipesOnSearch(searchedRecipe, offSet?.offset + 1, filetValues).then(
      (res) => {
        setoffSet({
          offset: res?.data?.offset,
          total: res?.data?.totalResults,
        });
        setsearchedRecipeValue([...searchedRecipeValue, ...res?.data?.results]);
      }
    );
  };

  const onSearchFilter = () => {
    setloading(true);
    getRecipesOnSearch(searchedRecipe, offSet?.offset + 1, filetValues)
      .then((res) => {
        setoffSet({
          offset: res?.data?.offset,
          total: res?.data?.totalResults,
        });
        setsearchedRecipeValue([...res?.data?.results]);
        setloading(false);
      })
      .catch((err) => setloading(false));
    setshowFilter(false);
  };

  const onFilterClick = () => {
    setshowFilter((prev) => !prev);
  };

  return (
    <div>
      <HeaderComponent />

      <div className={styles.searchBar}>
        <div></div>
        <SearchBar handleEnter={onSearchEntered} />
        {searchedRecipe ? (
          <div className={styles.filterContiner}>
            <img
              className={styles.filterIcon}
              src={filter}
              alt={"filter"}
              onClick={onFilterClick}
            />

            {showFilter && (
              <div className={styles.filterDetails}>
                <div className={styles.checkboxContainer}>
                  <label>Vegetarian</label>
                  <div className={styles.remove}>
                    {" "}
                    <input
                      type={"checkbox"}
                      checked={filetValues?.diet?.includes("vegetarian")}
                      name={"diet"}
                      value={"vegetarian"}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
                <div className={styles.checkboxContainer}>
                  <label>Indian</label>
                  <input
                    type={"checkbox"}
                    checked={filetValues?.cuisines?.includes("indian")}
                    name={"cuisines"}
                    value={"indian"}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className={styles.checkboxContainer}>
                  <label>Snack</label>
                  <input
                    type={"checkbox"}
                    checked={filetValues?.type?.includes("snack")}
                    name={"type"}
                    value={"snack"}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className={styles.checkboxContainer}>
                  <label>Breakfast</label>
                  <input
                    type={"checkbox"}
                    checked={filetValues?.type?.includes("breakfast")}
                    name={"type"}
                    value={"breakfast"}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <button
                  onClick={onSearchFilter}
                  className={styles.filterButton}
                >
                  Filter
                </button>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
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
