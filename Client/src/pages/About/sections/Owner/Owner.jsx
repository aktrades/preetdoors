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
      "Mr. Visheshwar Sah leads the company with a clear vision. He focuses on quality trust and long term customer satisfaction.",
  },
  {
    category: "Managing Partner",
    name: "Mr. Aman Kumar",
    role:
      "PGDC in Wood and Panel Product Technology MBA in Operations with over 8 years of experience as a Production Manager",
    img: Aman,
    description:
      "He manages production and operations. He ensures smooth workflow consistent quality and timely delivery.",
  },
  {
    category: "Managing Partner",
    name: "Mr. Amit Kumar",
    role: "Managing Partner",
    img: Amit,
    description:
      "He handles business growth planning and execution. He ensures the company moves forward with clear goals.",
  },
  {
    category: "Expert",
    name: "Mo. Tahir",
    role: "Design and Craftsmanship",
    img: expertImg,
    phone: VITE_COMPANY_PHONE_MO_TAHIR,
    description:
      "He is an expert in interior solutions like modular kitchens wardrobes TV panels and other interior work.",
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
