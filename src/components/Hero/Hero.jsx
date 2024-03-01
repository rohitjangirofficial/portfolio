import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohit Jangir</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1.5+ years of experience in React JS
          and Node JS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.actionBtns}>
          <a
            href="mailto:rohitjangirofficial@email.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a href="https://wa.me/918209083798" className={styles.whatsappBtn}>
            <img
              src={getImageUrl("hero/whatsapp.png")}
              alt="whatsapp"
              // className={styles.heroImg}
            />
          </a>
        </div>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
