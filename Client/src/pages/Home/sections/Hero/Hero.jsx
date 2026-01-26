import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import {Link} from 'react-router-dom';

const MotionLink = motion.create(Link);  

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Doors That Define Strength
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Crafting Style, Building Trust.
      </motion.p>

      <MotionLink
        to="/products"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.cta}
      >
        Explore Doors
      </MotionLink>
    </section>
  );
};

export default Hero; 
