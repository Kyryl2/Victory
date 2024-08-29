import SideBar from "../../components/SideBar/SideBar";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <SideBar />
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>

        <div className={styles.locationSection}>
          <h3 className={styles.locationTitle}>Our Locations</h3>

          <div className={styles.location}>
            <h4>Tokyo</h4>
            <p>123 Tokyo Street, Shibuya, Tokyo, Japan</p>
            <p>Phone: +81-3-1234-5678</p>
            <p>Email: tokyo@victoryrestaurant.com</p>
          </div>

          <div className={styles.location}>
            <h4>Napoli</h4>
            <p>456 Napoli Avenue, Chiaia, Napoli, Italy</p>
            <p>Phone: +39-081-123-4567</p>
            <p>Email: napoli@victoryrestaurant.com</p>
          </div>
        </div>

        <div className={styles.deliverySection}>
          <h3 className={styles.deliveryTitle}>Courier Delivery Available</h3>
          <p>We offer courier delivery to the following locations:</p>
          <ul className={styles.deliveryList}>
            <li>USA</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>10 European Countries</li>
          </ul>
          <p>For more information or to place an order, please contact us:</p>
          <p>Email: delivery@victoryrestaurant.com</p>
          <p>Phone: +1-800-123-4567</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
