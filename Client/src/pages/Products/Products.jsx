import MembraneDoors from "./Sections/membrane/MembraneDoors";
import MicroCoatedDoors from "./Sections/MicroCoatedDoors/MicroCoatedDoors";
import DigitalLaminateDoors from "./Sections/DigitalLaminateDoors/DigitalLaminateDoors";
import LaminateGrooveDoors from "./Sections/LaminateGrooveDoors/LaminateGrooveDoors";
import LaminateGroovedProfileDoors from "./Sections/LaminateGroovedProfileDoors/LaminateGroovedProfileDoors";
import ThreeDDoors from "./Sections/ThreeDDoors/ThreeDDoors";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <main className={styles.productsPage}>
      <header className={styles.header}>
        <h1>Our Door Collections</h1>
        <p>
          A curated range of doors designed to balance aesthetics, durability,
          and everyday performance.
        </p>
      </header>

      <MembraneDoors />
      <MicroCoatedDoors />
      <DigitalLaminateDoors />
      <LaminateGrooveDoors />
      <LaminateGroovedProfileDoors />
      <ThreeDDoors />
    </main>
  );
};

export default Products;
