import Image from "next/image";
import styles from "../styles/ItemCard.module.css";

const ItemCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/shoes.jpg" alt="" width="300" height="300" />
      <h1 className={styles.title}>Nike Air Force 1 '07</h1>
      <span className={styles.price}>Rp 1,729,000</span>
    </div>
  );
};

export default ItemCard;
