import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.item}>
        <div className={styles.texts}>ARI SHOES</div>
        {/* <Image src="/img/shoes-homepage.png" alt="" width="60" height="60" /> */}
      </div>
      {/* Mid */}
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>HOMEPAGE</li>
          </Link>

          <li className={styles.listItem}>PRODUCTS</li>
          <li className={styles.listItem}>CONTACT</li>
        </ul>
      </div>
      {/* Right */}
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart-iconfc.png" alt="" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
