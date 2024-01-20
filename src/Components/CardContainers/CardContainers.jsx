import React, { memo } from "react";
import styles from "./cardContainers.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";

function CardContainers({ dataToShown, heading, favClickedComp, isFav }) {
  return (
    <div>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.containerHero}>
        {dataToShown?.map((rec) => (
          <RecipeCard
            isFav={isFav}
            recDetails={rec}
            key={rec?.id}
            favClicked={(e) => {
              favClickedComp(e);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(CardContainers);
