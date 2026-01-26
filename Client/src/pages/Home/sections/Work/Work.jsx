import React from "react";
import { motion } from "framer-motion";
import styles from "./Work.module.css";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);  


const Work = () => (
  <section className={styles.work}>
    <MotionLink
      to="./ourprojects"
      className={styles.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      Explore Our Projects/work
      <span className={styles.arrow}>→</span>
    </MotionLink>
  </section>
);

export default Work;
