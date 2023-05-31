import Image from "next/image";
import styles from "../styles/ItemCard.module.css";
import Link from "next/link";

const ItemCard = ({ product }) => {
  var nf = new Intl.NumberFormat();
  console.log(product);
  return (
    <Link href={`/product/${product._id}`} passHref>
      <div className={styles.container}>
        <Image
          src={product?.img}
          alt=""
          width="400"
          height="300"
          className={styles.img}
        />
        {product.countInStock > 0 ? null : (
          <div className={styles.productHabis}>
            <div className={styles.productHabisContainerText}>
              <h3 className={styles.productHabisText}>
                Product <br />
                Habis
              </h3>
            </div>
          </div>
        )}
        <h1 className={styles.title}>{product?.title}</h1>
        <span className={styles.price}>Rp. {nf.format(product?.price)}</span>
      </div>
    </Link>
  );
};

export default ItemCard;
