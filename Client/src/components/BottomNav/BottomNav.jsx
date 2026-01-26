import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiUser} from "react-icons/fi"; 
import { GiBusDoors } from "react-icons/gi";
import { GrContact, GrProjects } from "react-icons/gr"; 
import styles from "./BottomNav.module.css";

const BottomNav = () => {
  return (
    <motion.nav
      className={styles.bottomNav}
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <NavLink to="/" end>
        <FiHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/products">
        <GiBusDoors />  
        <span>Doors</span>
      </NavLink>  
      <NavLink to="/ourprojects">
        <GrProjects />  
        <span>Our Projects</span>
      </NavLink>  
      <NavLink to="/contact">
        <GrContact />  
        <span>Reach Us</span>
      </NavLink>  
      <NavLink to="/about">
        <FiUser />
        <span>About Us</span>
      </NavLink>
    </motion.nav>
  );
};

export default BottomNav;
