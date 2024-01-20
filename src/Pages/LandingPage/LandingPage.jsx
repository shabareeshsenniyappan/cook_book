import React from "react";
import styles from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  // Function to handel navigation to home page
  const getIn = () => {
    navigate("/home");
  };
  return (
    <div className={styles.landingPageHeroContainer}>
      <section className={styles.landingHeader}>
        <div className={styles.landingHeaderText}>Cook Book</div>
        <div className={styles.landingHeaderSubText}>
          Food is gift and wonderful art
        </div>
      </section>

      <div className={styles.landingContentContainer}>
        <div className={styles.landingContainerSection1}>
          {" "}
          <div className={styles.sec1}>unlimited recipes</div>
          <div className={styles.sec2}>Start Cooking</div>
          <div className={styles.center}>
            <button className={styles.newButton} onClick={getIn}>
              Get Started
            </button>
          </div>
          <div className={styles.hint}>CLICK THE BUTTON TO EXPLORE !!!</div>
        </div>
        <div className={styles.landingContainerSection2}>
          <img
            className={styles.landingContainerImages}
            src={
              "https://firebasestorage.googleapis.com/v0/b/recepie-8b4ec.appspot.com/o/food1-cup-cake.jpg?alt=media&token=a8b882b8-cb6e-4113-865b-637ae4e397bd"
            }
            alt={"cup-cake"}
            loading={"lazy"}
          />
          <img
            className={styles.landingContainerImages}
            src={
              "https://firebasestorage.googleapis.com/v0/b/recepie-8b4ec.appspot.com/o/food8-chicken.jpg?alt=media&token=6fd9f170-8ee4-424e-8182-a2e10a268e9d"
            }
            alt={"chicken"}
            loading={"lazy"}
          />
          <img
            className={styles.landingContainerImages}
            src={
              "https://firebasestorage.googleapis.com/v0/b/recepie-8b4ec.appspot.com/o/food3-veg-tikka.webp?alt=media&token=d2027c04-e2ff-466c-8950-07fd14519369"
            }
            alt={"tikka"}
            loading={"lazy"}
          />
          <img
            className={styles.landingContainerImages}
            src={
              "https://firebasestorage.googleapis.com/v0/b/recepie-8b4ec.appspot.com/o/food4-panni-puri.jpg?alt=media&token=4c3c1701-0248-47a6-b2b0-344a7ddd7c7d"
            }
            alt={"cup-cake"}
            loading={"pani-puri"}
          />
          <img
            className={styles.landingContainerImages}
            src={
              "https://firebasestorage.googleapis.com/v0/b/recepie-8b4ec.appspot.com/o/food7-shakes.avif?alt=media&token=012951d2-ff98-4399-806c-0c2965fb5f91"
            }
            alt={"rool"}
            loading={"lazy"}
          />
          <img
            className={styles.landingContainerImages}
            src={
              "https://firebasestorage.googleapis.com/v0/b/recepie-8b4ec.appspot.com/o/doosa3.jpg?alt=media&token=27bc95d6-e5f6-46e5-9ea9-637df4544d1d"
            }
            alt={"dosa"}
            loading={"lazy"}
          />
          {/* <div className={styles.landingContainerImages}></div> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
