import React from "react";
import { motion } from "framer-motion";
import styles from "./Services.module.css";
import {
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineWrenchScrewdriver,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const data = [
  {
    title: "Design Planning",
    icon: <HiOutlineLightBulb />,
    desc: "Understanding requirements and planning the perfect solution.",
  },
  {
    title: "Manufacturing",
    icon: <HiOutlineCog />,
    desc: "Precision manufacturing with premium materials.",
  },
  {
    title: "Installation",
    icon: <HiOutlineWrenchScrewdriver />,
    desc: "Professional installation with quality checks.",
  },
  {
    title: "After Sales",
    icon: <HiOutlineShieldCheck />,
    desc: "Reliable support even after project delivery.",
  },
];

const Services = () => (
  <section className={styles.container}>
    <h5 className={styles.heading}>Working Style</h5>

    <div className={styles.roadmap}>
      {data.map((item, i) => (
        <motion.div
          key={item.title}
          className={styles.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          {/* Icon bubble */}
          <div className={styles.iconWrapper}>
            {item.icon}
          </div>

          {/* Content */}
          <div className={styles.card}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>

          {/* Connector */}
          {i !== data.length - 1 && <span className={styles.line} />}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
