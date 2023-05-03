import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { asPath } = useRouter();
  const pathAdmin = asPath.split("/")[1];
  const pathAdminLogin = asPath.split("/")[2];
  console.log(pathAdmin, pathAdminLogin);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:3000/api/logout");
      router.push("/admin/login");
    } catch (err) {
      console.log(err);
    }
  };

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
            <Link href="/product">
              <li className={styles.listItem}>PRODUCTS</li>
            </Link>

            <Link href="/about">
              <li className={styles.listItem}>ABOUT</li>
            </Link>
          </ul>
        </div>
      )}

      {/* Right */}
      {pathAdminLogin === "login" ? (
        <div className={styles.item}>
          <div className={styles.texts}>Admin Dashboard</div>
        </div>
      ) : pathAdmin === "admin" ? (
        <div className={styles.item}>
          <div className={styles.texts}>Admin Dashboard</div>
          <span onClick={handleLogout} className={styles.logout}>
            {" "}
            <Image src="/img/logout-rb.png" alt="" width="36" height="36" />
          </span>
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
