import React, { useEffect, useState } from "react";
import styles from "./recipeDetails.module.css";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import clock from "../../Utils/Icons/clock.png";
import calories from "../../Utils/Icons/calories.png";
import vegetarian from "../../Utils/Icons/vegetarian.png";
import nonVeg from "../../Utils/Icons/non-veg.png";
import sugar from "../../Utils/Icons/sugar.png";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../../Utils/apiServices";
import LoadingComponent from "../../Components/LoadingComponent/LoadingComponent";
function RecipeDetails() {
  let { id } = useParams();
  const [resDetail, setresDetail] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setloading(true);
    getRecipeDetail(id)
      .then((e) => {
        setresDetail(e?.data);
        setloading(false);
      })
      .catch((err) => setloading(false));
  }, [id]);

  return (
    <div>
      <HeaderComponent />
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className={styles.deatailsContainer}>
          <div className={styles.imageContainer}>
            <img
              src={resDetail?.image}
              alt={"Detail"}
              loading={"lazy"}
              className={styles.imageStyle}
            />
            <div className={styles.infoContainer}>
              <div className={styles.infoName}>{resDetail?.title}</div>
              <div className={styles.infoNutriContainer}>
                <div className={styles.cardIconPack}>
                  <img className={styles.cardIcon} src={clock} alt={"clock"} />
                  <span className={styles.cardIconInfo}>
                    {resDetail?.cookingMinutes + " "} <span></span>min
                  </span>
                </div>
                <div className={styles.cardIconPack}>
                  <img
                    className={styles.cardIcon}
                    src={calories}
                    alt={"calories"}
                  />
                  <span className={styles.cardIconInfo}>
                    {Math.round(resDetail?.nutrition?.nutrients[0]?.amount) +
                      " "}
                    Kcal
                  </span>
                </div>
                <div className={styles.cardIconPack}>
                  <img className={styles.cardIcon} src={sugar} alt={"sugar"} />
                  <span className={styles.cardIconInfo}>
                    {Math.round(resDetail?.nutrition?.nutrients[6]?.amount) +
                      " "}
                    g
                  </span>
                </div>
                <div className={styles.cardIconPack}>
                  <img
                    className={styles.cardIcon}
                    src={resDetail?.vegetarian ? vegetarian : nonVeg}
                    alt={"veg"}
                  />
                  <span className={styles.cardIconInfo}>
                    {resDetail?.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.deatilaContainer}>
            <div className={styles.ingHeading}>Ingredients</div>
            <div className={styles.ingDetailsContainer}>
              {resDetail?.extendedIngredients?.map((ing, index) => (
                <div className={styles.ingCont} key={ing?.id}>
                  <span className={styles.ingUnit}>{index + 1}</span>
                  <div className={styles.ingDetailTex}>{ing?.original}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.deatilaContainer}>
            <div className={styles.ingHeading}>Instructions</div>
            <div className={styles.ingDetailsContainer}>
              {resDetail?.analyzedInstructions[0]?.steps?.map((ins, index) => (
                <div className={styles.ingCont} key={index}>
                  <span className={styles.ingUnit}>{ins?.number}</span>
                  <div className={styles.ingDetailTex}>{ins?.step}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.deatilaContainer}>
            <div className={styles.ingHeading}>Summary</div>
            <div className={styles.ingDetailsContainer}>
              <div
                className={styles.ingDetailTex}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(resDetail?.summary),
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
