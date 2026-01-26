import { motion } from "framer-motion";
import styles from "./AboutContact.module.css";
import { Link } from "react-router-dom";

const AboutContact = () => {
  return (
    <motion.section
      className={styles.contactSection}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className={styles.heading}>Let’s Build Something Solid</h2>
      <p className={styles.text}>
        Have a project, a requirement, or just a question?  
        Our team is ready to help you choose the right solution.
      </p>

      <Link to="/contact" className={styles.cta}>
        Reach Us
      </Link>
    </motion.section>
  );
};

export default AboutContact;
