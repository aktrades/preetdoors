import { motion } from "framer-motion";
import styles from "./Owner.module.css";

import chairmanImg from "../../../../assets/images/chairmanImg.jpeg";
import Amit from "../../../../assets/images/Amit.jpeg";
import Aman from "../../../../assets/images/Aman.jpeg";
import expertImg from "../../../../assets/images/expertImg.jpeg";

const {
  VITE_COMPANY_PHONE_SECONDARY,
  VITE_COMPANY_PHONE_MO_TAHIR,
} = import.meta.env;

const people = [
  {
    category: "Chairman",
    name: "Mr. Visheshwar Sah",
    role: "Chairman",
    img: chairmanImg,
    phone: VITE_COMPANY_PHONE_SECONDARY,
    description:
      "With a strong vision for quality and long-term reliability, Mr. Visheshwar Sah leads the brand with a focus on trust, craftsmanship, and customer satisfaction.",
  },
  {
    category: "Managing Partner",
    name: "Mr. Aman Kumar",
    role:
      "PGDC – Wood & Panel Product Technology, MBA (Operations). 8+ years as Production Manager.",
    img: Aman,
    description:
      "Brings deep operational expertise and production leadership, ensuring efficiency, consistency, and quality across manufacturing processes.",
  },
  {
    category: "Managing Partner",
    name: "Mr. Amit Kumar",
    role: "Managing Partner",
    img: Amit,
    description:
      "Focused on business growth, coordination, and execution, aligning operations with long-term strategic goals.",
  },
  {
    category: "Expert",
    name: "Mo. Tahir",
    role: "Design & Craftsmanship",
    img: expertImg,
    phone: VITE_COMPANY_PHONE_MO_TAHIR,
    description:
      "Expert in interior solution as modular kitchen,wardrobe ,tv panel and other interior works.",
  },
];

const Owner = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Leadership & Experts</h2>

      <div className={styles.list}>
        {people.map((person) => (
          <motion.div
            key={person.name}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className={styles.category}>{person.category}</span>

            <div className={styles.profile}>
              <div className={styles.imageWrapper}>
                <img src={person.img} alt={person.name} />
              </div>

              <div className={styles.identity}>
                <h3>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>

                {person.phone && (
                  <a
                    href={`tel:${person.phone}`}
                    className={styles.callBtn}
                  >
                    Talk Now
                  </a>
                )}
              </div>
            </div>

            <p className={styles.description}>{person.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Owner;
