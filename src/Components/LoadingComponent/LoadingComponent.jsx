import React from "react";
import ReactLoading from "react-loading";
import styles from "./loadingComp.module.css";
function LoadingComponent() {
  return (
    <div className={styles.loader}>
      <ReactLoading
        type={"spin"}
        color={"black"}
        height={"40px"}
        width={"40px"}
      />
    </div>
  );
}

export default LoadingComponent;
