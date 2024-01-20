import React from "react";
import styles from "./headerComponent.module.css";
import cook from "../../Utils/Icons/cooking.png";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();
  const onLogClick = () => {
    navigate("/home");
  };
  return (
    <div className={styles.headerHeroContainer} onClick={onLogClick}>
      <img src={cook} alt={"cook"} className={styles.logo} />
      Cook Book
    </div>
  );
}

export default HeaderComponent;
