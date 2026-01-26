// src/pages/Home/Home.jsx
import React from "react";
import styles from "./Home.module.css";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import WhyUs from "./sections/WhyUs/WhyUs";
import Work from "./sections/Work/Work";
import CTA from "./sections/CTA/HomeCTA";
import Stats from "./sections/Stats/Stats";

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Work />
      <CTA />
    </main>
  );
};

export default Home;
