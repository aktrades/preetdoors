import { motion } from "framer-motion";
import styles from "./ThreeDDoors.module.css";
import ThreeDDoorsImg from "../../../../assets/images/ThreeDDoors.jpg";

const ThreeDDoors = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.kicker}>Door Type</span>
          <h2 className={styles.title}>3D Doors</h2>
          <p className={styles.description}>
            3D doors are crafted to create a strong visual impact through layered
            designs and textured finishes. They are ideal for spaces that demand
            bold expression and premium appeal.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={ThreeDDoorsImg}
            alt="3D door design"
            className={styles.image}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ThreeDDoors;
