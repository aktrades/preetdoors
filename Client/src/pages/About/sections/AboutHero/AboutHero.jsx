import { motion } from "framer-motion";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <span className={styles.kicker}>Premium Doors & Surfaces</span>
        <h1 className={styles.title}>Preet Doors</h1>
        <p className={styles.subtitle}>Crafting Style, Building Trust</p>
      </div>
    </motion.section>
  );
};

export default AboutHero;
