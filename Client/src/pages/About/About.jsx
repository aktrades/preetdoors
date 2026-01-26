import React from "react";
import AboutHero from "./sections/AboutHero/AboutHero";
import AboutBrand from "./sections/AboutBrand/AboutBrand";
import AboutValues from "./sections/AboutValues/AboutValues";
import AboutProducts from "./sections/AboutProducts/AboutProducts";
import AboutContact from "./sections/AboutContact/AboutContact";
import styles from "./About.module.css";
import Owner from "./sections/Owner/Owner";

const About = () => {
  return (
    <main className={styles.about}>
      <AboutHero />
      <Owner/>
      <AboutBrand />
      <AboutValues />
      <AboutProducts />
      <AboutContact />
    </main>
  );
};

export default About;
