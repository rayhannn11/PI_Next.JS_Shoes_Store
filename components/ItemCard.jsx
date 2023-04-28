import Image from "next/image";
import styles from "../styles/ItemCard.module.css";
import Link from "next/link";

const ItemCard = ({ product }) => {
  var nf = new Intl.NumberFormat();
  return (
    <Link href={`/product/${product._id}`} passHref>
      <div className={styles.container}>
        <Image src={product?.img} alt="" width="300" height="300" />
        <h1 className={styles.title}>{product?.title}</h1>
        <span className={styles.price}>Rp. {nf.format(product?.price)}</span>
      </div>
    </Link>
  );
};

export default ItemCard;
