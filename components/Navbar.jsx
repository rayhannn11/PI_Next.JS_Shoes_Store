import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { asPath } = useRouter();
  const pathAdmin = asPath.split("/")[1];

  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.item}>
        <div className={styles.texts}>
          {pathAdmin === "admin" ? "" : "Ari Shoes"}
        </div>
      </div>
      {/* Mid */}
      {pathAdmin === "admin" ? (
        ""
      ) : (
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href="/">
              <li className={styles.listItem}>HOMEPAGE</li>
            </Link>

            <li className={styles.listItem}>PRODUCTS</li>
            <li className={styles.listItem}>CONTACT</li>
          </ul>
        </div>
      )}

      {/* Right */}
      {pathAdmin === "admin" ? (
        <div className={styles.item}>
          <div className={styles.texts}>Admin Dashboard</div>
        </div>
      ) : (
        <div className={styles.item}>
          <Link href="/cart">
            <div className={styles.cart}>
              <Image
                src="/img/cart-icon-polos.png"
                alt=""
                width="40"
                height="40"
              />
              {quantity > 0 ? (
                <div className={styles.counter}>{quantity}</div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
