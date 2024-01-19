import React from "react";
import styles from "./headerComponent.module.css";
import SearchBar from "../SearchBar/SearchBar";

function HeaderComponent() {
  return (
    <div className={styles.headerHeroContainer}>
      Cook Book
      <SearchBar /> <div></div>
    </div>
  );
}

export default HeaderComponent;
