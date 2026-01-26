import { motion } from "framer-motion";
import styles from "./LaminateGrooveDoors.module.css";
import LaminateGrooveDoorsImg from "../../../../assets/images/LaminateGrooveDoors.jpeg";

const LaminateGrooveDoors = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.kicker}>Door Type</span>
          <h2 className={styles.title}>Laminate Groove Doors</h2>
          <p className={styles.description}>
            These doors feature precision grooves that add depth and character.
            Laminate groove doors are suitable for contemporary spaces that
            demand subtle detailing without compromising durability.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={LaminateGrooveDoorsImg}
            alt="Laminate groove door design"
            className={styles.image}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default LaminateGrooveDoors;
