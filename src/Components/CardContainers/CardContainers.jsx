import React from "react";
import styles from "./cardContainers.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";

function CardContainers({ dataToShown }) {
  console.log(dataToShown, "chk1");
  return (
    <div>
      <div className={styles.heading}>Find The New Recipies</div>
      <div className={styles.containerHero}>
        {dataToShown?.map((rec) => (
          <RecipeCard recDetails={rec} key={rec?.id} />
        ))}
      </div>
    </div>
  );
}

export default CardContainers;
