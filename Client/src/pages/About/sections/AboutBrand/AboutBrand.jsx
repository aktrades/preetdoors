import { motion } from "framer-motion";
import styles from "./AboutBrand.module.css";

const AboutBrand = () => {
  return (
    <motion.section
      className={styles.brandSection}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <span className={styles.kicker}>Who We Are</span>

        <h2 className={styles.heading}>About the Brand</h2>

        <p className={styles.description}>
          Preet Doors is a premium brand by V S Enterprises, specializing in
          designer doors, plywood, and laminates. We combine modern aesthetics
          with precision craftsmanship to deliver products that last.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutBrand;
