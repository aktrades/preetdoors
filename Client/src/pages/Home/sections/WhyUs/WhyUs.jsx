import React from "react";
import { motion } from "framer-motion";
import styles from "./WhyUs.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineCog6Tooth,
  HiOutlineClock,
} from "react-icons/hi2"; 
import { CiHeart } from "react-icons/ci";
const points = [
  {
    title: "Premium Materials",
    icon: <HiOutlineShieldCheck />,
    desc: "High-grade raw materials ensuring durability and longevity.",
  },
  {
    title: "Precision Engineering",
    icon: <HiOutlineCog6Tooth />,
    desc: "Manufactured with accuracy and modern techniques.",
  },
  {
    title: "Timely Delivery",
    icon: <HiOutlineClock />,
    desc: "Committed timelines without compromising quality.",
  },
  {
    title: "Trusted Support",
    icon: <CiHeart />,
    desc: "Reliable assistance before and after installation.",
  },
];

const WhyUs = () => (
  <section className={styles.why}>
    <h2 className={styles.heading}>Why Choose Us</h2>

    <div className={styles.grid}>
      {points.map((p, i) => (
        <motion.div
          key={p.title}
          className={styles.item}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -6 }}
        >
          <div className={styles.icon}>{p.icon}</div>
          <h4>{p.title}</h4>
          <p>{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyUs;
