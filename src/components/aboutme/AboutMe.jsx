import { t } from "i18next";
import { img } from "../../assets";
import styles from "./AboutMe.module.css";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
    >
      <section className={`aboutme ${styles.aboutme}`}>
        <img src={img.aboutme} alt="aboutme" />
        <p>{t("aboutmeTwo")}</p>

        <div className={styles.sl}>
          <section className={styles.skills}>
            <article className="title">
              <h4>{t("mySkills")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <div>
              <span>HTML</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>CSS</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>Styled-Component</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Tailwind</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Express</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>JavaScript</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li ></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>React</span>
              <ul>
                <li></li>
                <li></li>
                <li ></li>
                <li ></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Nodejs</span>
              <ul>
                <li></li>
                <li></li>
                <li ></li>
                <li ></li>
                <li ></li>
              </ul>
            </div>

            <div>
              <span>GraphQL</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>PostgreSQL</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>MongoDB</span>
              <ul>
                <li></li>
                <li></li>
                <li ></li>
                <li ></li>
                <li ></li>
              </ul>
            </div>
          </section>

          <section className={styles.languages}>
            <article className="title">
              <h4>{t("languages")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <div>
              <span>{t("English")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>{t("Pidgin")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>{t("Yoruba")}</span>
              <ul>
                <li></li>
                <li ></li>
                <li ></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMe;
