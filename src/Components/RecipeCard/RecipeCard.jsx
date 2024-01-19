import React from "react";
import styles from "./recipeCard.module.css";
import DOMPurify from "dompurify";
import clock from "../../Utils/Icons/clock.png";
import score from "../../Utils/Icons/score.png";
import vegetarian from "../../Utils/Icons/vegetarian.png";
import nonVeg from "../../Utils/Icons/non-veg.png";
import fav from "../../Utils/Icons/fav1.png";
import nonFav from "../../Utils/Icons/fav.png";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recDetails }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.cardContainer}
      onClick={() => navigate(`/detail/${recDetails?.id}`)}
    >
      <img
        src={recDetails?.image}
        alt={recDetails?.title}
        className={styles.cardImage}
      />
      <div className={styles.pad}>
        <div className={styles.cardTitle}>{recDetails?.title}</div>
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
      </div>
      <img
        className={styles.fav}
        src={recDetails?.fav ? fav : nonFav}
        alt={"fav"}
      />
    </div>
  );
}

export default RecipeCard;
