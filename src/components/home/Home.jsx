import React from "react";
import { img } from "../../assets";
import styles from "./home.module.css";

import { t } from "i18next";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={`home ${styles.home}`}>
      <img src={img.homeBg} alt="home" />

      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(1500).deleteAll().start();
          }}
          options={{
            strings: ["FullStack Software Developer", "Front-end", "Back-end"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <ul>
        <li>
          <span>{t("age")}:</span> 24
        </li>
        <li>
          <span>{t("dob")}:</span> {t("dobA")}
        </li>
        <li>
          <span>{t("address")}:</span> {t("addressA")}
        </li>
      </ul>
    </div>
  );
};

export default Home;
