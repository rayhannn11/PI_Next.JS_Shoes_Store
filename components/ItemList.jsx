import styles from "../styles/ItemList.module.css";
import ItemCard from "./ItemCard";
import Image from "next/image";

const ItemList = ({ products }) => {
  return (
    <div className={styles.container}>
      <Image src="/img/nike-just-do-it.jpg" alt="" width="1400" height="300" />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>SHOES STORE TERBAIK DISEKITAR ANDA</h1>
        <p className={styles.desc}>
          MENYEDIAKAN BERBAGAI MACAM SEPATU PREMIUM QUALITY DENGAN HARGA
          TERJANGKAU.
        </p>
        <button className={styles.button}>ALL PRODUCTS</button>
      </div>

      <p className={styles.itemListTitle}>Product Terbaru dan Terpopuler</p>

      <div className={styles.wrapper}>
        {products?.map((product) => (
          <ItemCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
