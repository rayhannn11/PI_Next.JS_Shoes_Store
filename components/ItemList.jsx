import { useEffect, useState } from "react";
import styles from "../styles/ItemList.module.css";
import ItemCard from "./ItemCard";
import Image from "next/image";
import Link from "next/link";

const ItemList = ({ products }) => {
  const [populerProduct, setPopulerProduct] = useState(products);

  useEffect(() => {
    setPopulerProduct((prev) => [...prev].sort((a, b) => b.sold - a.sold));
  }, []);

  return (
    <div className={styles.container}>
      <Image src="/img/nike-just-do-it.jpg" alt="" width="1400" height="300" />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>SHOES STORE TERBAIK DISEKITAR ANDA</h1>
        <p className={styles.desc}>
          MENYEDIAKAN BERBAGAI MACAM SEPATU PREMIUM QUALITY DENGAN HARGA
          TERJANGKAU.
        </p>
        <button className={styles.button}>
          <Link href={"/product"}>ALL PRODUCTS</Link>
        </button>
      </div>

      <p className={styles.itemListTitle}>Product Terbaru dan Terpopuler</p>
      <div className={styles.Hr} />

      <div className={styles.wrapper}>
        {populerProduct?.slice(0, 4).map((product) => (
          <ItemCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
