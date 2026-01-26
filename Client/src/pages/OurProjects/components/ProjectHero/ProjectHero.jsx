import { motion } from "framer-motion";
import styles from "./ProjectHero.module.css";

const ProjectHero = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <h1>Our Projects/Installations</h1>
        <p>
          A glimpse into real installations crafted with precision, quality,
          and attention to detail.
        </p>
      </div>
    </motion.section>
  );
};

export default ProjectHero;
