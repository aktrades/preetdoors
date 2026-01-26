import styles from "./ProjectGallery.module.css";

import Real01 from "../../../../assets/other/Real01.jpeg";
import Real02 from "../../../../assets/other/Real02.jpeg";
import Real03 from "../../../../assets/other/Real03.jpeg";
import Real04 from "../../../../assets/other/Real04.jpeg";
import Real05 from "../../../../assets/other/Real05.jpeg";
import Real06 from "../../../../assets/other/Real06.jpeg";
import Real07 from "../../../../assets/other/Real07.jpeg";
import Real08 from "../../../../assets/other/Real08.jpeg";
import Real09 from "../../../../assets/other/Real09.jpeg";
import Real10 from "../../../../assets/other/Real10.jpeg"; 
import Real11 from "../../../../assets/other/Real11.jpeg"; 
import Real12 from "../../../../assets/other/Real12.jpeg"; 
import Real13 from "../../../../assets/other/Real13.jpeg"; 
import Real14 from "../../../../assets/other/Real14.jpeg"; 
import Real15 from "../../../../assets/other/Real15.jpeg"; 
import Real16 from "../../../../assets/other/Real16.jpeg"; 
import Real17 from "../../../../assets/other/Real17.jpeg"; 
import Real18 from "../../../../assets/other/Real18.jpeg"; 
import Real19 from "../../../../assets/other/Real19.jpeg"; 
import Real20 from "../../../../assets/other/Real20.jpeg"; 
import Real21 from "../../../../assets/other/Real21.jpeg"; 
import Real22 from "../../../../assets/other/Real22.jpeg"; 
import Real23 from "../../../../assets/other/Real23.jpeg"; 
import Real24 from "../../../../assets/other/Real24.jpeg"; 
import Real25 from "../../../../assets/other/Real25.jpeg"; 
import Real26 from "../../../../assets/other/Real26.jpeg"; 
import Real27 from "../../../../assets/other/Real27.jpeg"; 
import Real28 from "../../../../assets/other/Real28.jpeg"; 
import Real29 from "../../../../assets/other/Real29.jpeg"; 
import Real30 from "../../../../assets/other/Real30.jpeg"; 
import Real31 from "../../../../assets/other/Real31.jpeg"; 
import Real32 from "../../../../assets/other/Real32.jpeg"; 
import Real33 from "../../../../assets/other/Real33.jpeg"; 
import Real34 from "../../../../assets/other/Real34.jpeg"; 
import Real35 from "../../../../assets/other/Real35.jpeg"; 

const images = [
  Real01,
  Real02,
  Real03,
  Real04,
  Real05,
  Real06,
  Real07,
  Real08,
  Real09,
  Real10,
  Real11,
  Real12,
  Real13,
  Real14,
  Real15,
  Real16,
  Real17,
  Real18,
  Real19,
  Real20,
  Real21,
  Real22,
  Real23,
  Real24,
  Real25,
  Real26,
  Real27,
  Real28,
  Real29,
  Real30,
  Real31,
  Real32,
  Real33,
  Real34,
  Real35,
];

const ProjectGallery = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.grid}>
        {images.map((img, index) => (
          <div key={index} className={styles.card}>
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
