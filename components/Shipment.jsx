import { useState } from "react";
import styles from "../styles/Shipment.module.css";

const Shipment = ({ products, total, setIsCheckout, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({
      customer,
      products: products?.map((item) => ({
        productId: item?._id,
        title: item?.title,
        img: item?.img,
        size: item?.size,
        quantity: item?.quantityItem,
      })),
      address,
      telephone,
      total,
      method: 0,
    });
  };

  //
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => setIsCheckout(false)}>
          X
        </span>
        <h1 className={styles.title}>Pembayaran Cash On Delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            placeholder="Rayhan Naufal"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Nomor Telephone</label>
          <input
            type="text"
            placeholder="082386416545"
            className={styles.input}
            onChange={(e) => setTelephone(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder=" Jl. Raya Bogor No.KM.24 No.40, RT.6/RW.1, Susukan, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13770"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={() => handleClick()}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Shipment;
