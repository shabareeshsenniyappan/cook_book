import React from "react";
import styles from "./recipeCard.module.css";
import DOMPurify from "dompurify";
import clock from "../../Utils/Icons/clock.png";
import score from "../../Utils/Icons/score.png";
import vegetarian from "../../Utils/Icons/vegetarian.png";
import nonVeg from "../../Utils/Icons/non-veg.png";
import fav from "../../Utils/Icons/fav.png";
import nonFav from "../../Utils/Icons/non-fav.png";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recDetails, favClicked, isFav, isIng }) {
  const navigate = useNavigate();

  // Function to handel fav recipe
  const onFavClick = (e) => {
    e.stopPropagation();
    favClicked(recDetails?.id);
  };
  return (
    <div
      className={styles.cardContainer}
      onClick={() => navigate(`/detail/${recDetails?.id}`)}
    >
      <img
        loading={"lazy"}
        src={recDetails?.image}
        alt={recDetails?.title}
        className={styles.cardImage}
      />

      <div className={styles.pad}>
        <div className={styles.cardTitle}>{recDetails?.title}</div>
        {isIng || recDetails?.isIng ? (
          <>
            {" "}
            <div className={styles.req}>Also Required</div>
            <div className={styles.missedIngCont}>
              {recDetails?.missedIngredients?.map((ing, index) => {
                if (index < 2) {
                  return (
                    <div className={styles.ingCont}>
                      <div className={styles.ingNum}>{index + 1}</div>
                      <div className={styles.ingTypo}>{ing?.original}</div>
                    </div>
                  );
                }
              })}
            </div>
          </>
        ) : (
          <>
            {" "}
            <span
              className={styles.cardDesc}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(recDetails?.summary),
              }}
            ></span>
            <div className={styles.cardInfo}>
              <div className={styles.cardIconPack}>
                <img className={styles.cardIcon} src={clock} alt={"clock"} />
                <span className={styles.cardIconInfo}>
                  {recDetails?.readyInMinutes}min
                </span>
              </div>
              <div className={styles.cardIconPack}>
                <img className={styles.cardIcon} src={score} alt={"score"} />
                <span className={styles.cardIconInfo}>
                  {recDetails?.healthScore}Pt
                </span>
              </div>
              <div className={styles.cardIconPack}>
                <img
                  className={styles.cardIcon}
                  src={recDetails?.vegetarian ? vegetarian : nonVeg}
                  alt={"vegan"}
                />
                {/* <span className={styles.cardIconInfo}>
            {recDetails?.readyInMinutes}min
          </span> */}
              </div>
            </div>
          </>
        )}
      </div>

      <img
        onClick={onFavClick}
        className={styles.fav}
        src={isFav ? fav : nonFav}
        alt={"fav"}
      />
    </div>
  );
}

export default RecipeCard;
