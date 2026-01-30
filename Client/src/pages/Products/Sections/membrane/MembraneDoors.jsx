import { motion } from "framer-motion";
import styles from "./MembraneDoors.module.css";
import MembraneDoorImg from "../../../../assets/images/membrane.jpg";

const MembraneDoors = () => {
  const { VITE_WHATSAPP_NUMBER, VITE_COMPANY_PHONE_PRIMARY } = import.meta.env;

  const whatsappLink = `https://wa.me/${VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent("I want to buy Membrane Doors")},`;
  const callLink = `tel:${VITE_COMPANY_PHONE_PRIMARY}`;
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.kicker}>Door Type</span>
          <h2 className={styles.title}>Membrane Doors</h2>
          <p className={styles.description}>
            Membrane doors are known for their seamless finish and smooth
            surface. Manufactured using advanced membrane press technology,
            these doors offer excellent resistance to moisture and everyday
            wear.
          </p>
          <div className={styles.contactBtn}>
            <h4>Book Now </h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              WhatsApp Us
            </a>
            <a
              href={callLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.callBtn}
            >
              Call Us
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={MembraneDoorImg}
            alt="Membrane door design"
            className={styles.image}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MembraneDoors;
