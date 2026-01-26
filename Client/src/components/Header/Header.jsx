import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import logo from "../../assets/Logo/logo.png";

const Header = () => {
  const {
    VITE_COMPANY_NAME,
    VITE_NAV_HOME,
    VITE_NAV_PRODUCTS,
    VITE_NAV_OURSERVICES,
    VITE_NAV_ABOUT,
    VITE_NAV_CONTACT, 
    VITE_COMPANY_SHORT_TAG
  } = import.meta.env;

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        {/* Brand */}
        <Link to="/" className={styles.brand}>
          <img src={logo} alt={`${VITE_COMPANY_NAME} logo`} />
          <div className={styles.namesContainer}>
            <p className={styles.name}>{VITE_COMPANY_NAME}</p>
            <p className={styles.subName}>{VITE_COMPANY_SHORT_TAG}</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link to="/">{VITE_NAV_HOME}</Link>
          <Link to="/products">{VITE_NAV_PRODUCTS}</Link>
          <Link to="/ourprojects">{VITE_NAV_OURSERVICES}</Link>
          <Link to="/contact">{VITE_NAV_CONTACT}</Link>
          <Link to="/about">{VITE_NAV_ABOUT}</Link>
        </nav>

        {/* Right actions */}
        <div className={styles.right}>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
