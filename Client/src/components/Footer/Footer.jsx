import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const {
    VITE_COMPANY_NAME,
    VITE_COMPANY_SUBNAME,
    VITE_COMPANY_WORKSHOP,
    VITE_COMPANY_TAGLINE,
    VITE_COMPANY_ADDRESS,
    VITE_COMPANY_EMAIL,
    VITE_COMPANY_PHONE_PRIMARY,
    VITE_COMPANY_PHONE_SECONDARY,
    VITE_COMPANY_MAP_URL,
    VITE_COMPANY_WEBSITE,
    VITE_SOCIAL_YOUTUBE,
    VITE_SOCIAL_TWITTER,
    VITE_SOCIAL_INSTAGRAM,
    VITE_SOCIAL_FACEBOOK,
    VITE_COMPANY_GSTIN,
  } = import.meta.env;

  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* BRAND */}
        <div className={styles.brand}>
          <div>
            <h3>{VITE_COMPANY_SUBNAME}</h3>
            <h4>GSTIN/UIN: {VITE_COMPANY_GSTIN}</h4>
          </div>
          <p>{VITE_COMPANY_TAGLINE}</p>
        </div>

        {/* CONTACT */}
        <div className={styles.section}>
          <h5>Contact</h5>
          <p>{VITE_COMPANY_PHONE_PRIMARY}</p>
          <p>{VITE_COMPANY_PHONE_SECONDARY}</p>
          <p className={styles.inline}>
            <IoMail />
            <a href={`mailto:${VITE_COMPANY_EMAIL}`}>{VITE_COMPANY_EMAIL}</a>
          </p>
        </div>

        {/* ADDRESS */}
        <div className={styles.section}>
          <h5>Location</h5>
          <h5>Regd office:-</h5>
          <p className={styles.inline}>{VITE_COMPANY_ADDRESS}</p>
          <h5>Workshop :-</h5>
          <p className={styles.inline}>{VITE_COMPANY_WORKSHOP}</p>
          <p>
            <FaLocationDot />
            <a
              href={VITE_COMPANY_MAP_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.mapLink}
            >
              View on Google Maps
            </a>
          </p>
        </div>

        {/* LINKS */}
        <div className={`${styles.section} ${styles.quickLink}`}>
          <h5>Quick Links</h5>
          <nav className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/products">Doors</Link>
            <Link to="/ourprojects">Our Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </motion.div>

      {/* SOCIAL + COPYRIGHT */}
      <div className={styles.bottom}>
        <h5>Follow Us</h5>
        <div className={styles.social}>
          <a href={VITE_SOCIAL_INSTAGRAM} target="_blank">
            <FaInstagram />
          </a>
          <a href={VITE_SOCIAL_FACEBOOK} target="_blank">
            <FaFacebook />
          </a>
          <a href={VITE_SOCIAL_YOUTUBE} target="_blank">
            <FaYoutube />
          </a>
          <a href={VITE_SOCIAL_TWITTER} target="_blank">
            <FaXTwitter />
          </a>
        </div>

        <div className={styles.copyRightContainer}>
          <p className={styles.copyRight}>
            © {new Date().getFullYear()} {VITE_COMPANY_NAME}. All Right
            Reserved.
          </p>
          <p className={styles.companyTag}>
            Built by{" "}
            <a href={VITE_COMPANY_WEBSITE} target="_blank">
              Pandit Soft Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
