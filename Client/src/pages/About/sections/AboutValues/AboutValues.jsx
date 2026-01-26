import { motion } from "framer-motion";
import styles from "./AboutValues.module.css";

const values = [
  "Commitment to quality products",
  "Modern and functional designs",
  "Long-lasting performance",
  "Reliability and precision finishing",
  "Customer satisfaction first",
];

const AboutValues = () => {
  return (
    <motion.section
      className={styles.valuesSection}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className={styles.header}>
        <h2>Our Focus</h2>
        <p>
          Every product we deliver is guided by principles that balance design,
          durability, and trust.
        </p>
      </header>

      <ul className={styles.valuesGrid}>
        {values.map((item, index) => (
          <motion.li
            key={item}
            className={styles.valueCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span className={styles.index}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.text}>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default AboutValues;
