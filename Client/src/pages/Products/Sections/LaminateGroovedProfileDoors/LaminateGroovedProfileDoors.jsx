import { motion } from "framer-motion";
import styles from "./LaminateGroovedProfileDoors.module.css";
import LaminateGroovedProfileDoorsImg from "../../../../assets/images/LaminateGroovedProfileDoors.jpeg";

const LaminateGroovedProfileDoors = () => {
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
          <h2 className={styles.title}>Laminate Grooved Profile Doors</h2>
          <p className={styles.description}>
            Grooved profile doors combine structured profiles with laminated
            surfaces, delivering a premium architectural look suited for both
            residential and commercial interiors.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={LaminateGroovedProfileDoorsImg}
            alt="Laminate grooved profile door"
            className={styles.image}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default LaminateGroovedProfileDoors;
