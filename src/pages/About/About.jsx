import SideBar from "../../components/SideBar/SideBar";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <SideBar />
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>About Restaurant Victory</h2>
        <p className={styles.aboutText}>
          Welcome to <strong>Restaurant Victory</strong>, where the rich
          traditions of Ukrainian cuisine meet the vibrant flavors of sushi and
          pizza! Our menu features a delightful array of authentic Ukrainian
          dishes, crafted with love and the freshest ingredients.
        </p>
        <p className={styles.aboutText}>
          From hearty borscht to creative sushi rolls, we offer a unique dining
          experience that celebrates diverse culinary influences. Enjoy our
          delicious offerings knowing that 20% of every purchase supports the
          Ukrainian military.
        </p>
        <p className={styles.aboutText}>
          Thank you for dining with us and contributing to a noble cause!
        </p>
      </div>
    </>
  );
};

export default About;
