import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./AboutProducts.module.css";

const AboutProducts = () => {
  return (
    <motion.section
      className={styles.productsSection}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.content}>
        <h2>Designed for Spaces That Matter</h2>

        <p>
          From refined designer doors to high-performance plywood and laminates,
          our products are built to combine aesthetics, strength, and long-term
          reliability. Every piece is crafted to elevate both residential and
          commercial interiors.
        </p>

        <Link to="/products" className={styles.cta}>
          Explore Our Products
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutProducts;
