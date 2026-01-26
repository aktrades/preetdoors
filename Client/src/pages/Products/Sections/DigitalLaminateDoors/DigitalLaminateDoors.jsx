import { motion } from "framer-motion";
import styles from "./DigitalLaminateDoors.module.css";
import digitalLamDoor from "../../../../assets/images/DigitalLaminateDoors.jpg";

const DigitalLaminateDoors = () => {
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
          <h2 className={styles.title}>Digital Laminate Doors</h2>
          <p className={styles.description}>
            Digital laminate doors use advanced printing technology to create
            detailed patterns and textures. They allow creative freedom while
            maintaining strength and surface stability.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={digitalLamDoor}
            alt="Digital laminate door design"
            className={styles.image}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default DigitalLaminateDoors;
