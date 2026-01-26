import React from "react";
import { motion } from "framer-motion";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h1>Reach Us</h1>
        <p className={styles.subtext}>
          Tell us about your project/plan. We’ll respond within a hours.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
