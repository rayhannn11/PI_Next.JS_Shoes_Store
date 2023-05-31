import { useState } from "react";
import styles from "../styles/Shipment.module.css";
import Alert from "@/components/Alert";

const Shipment = ({ products, total, setIsCheckout, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [address, setAddress] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleClick = () => {
    console.log(products);
    if (customer && telephone && address) {
      createOrder({
        customer,
        products: products?.map((item) => ({
          uniqueId: item?.idProduct,
          productId: item?._id,
          title: item?.title,
          img: item?.img,
          size: item?.selectedSize,
          categories: item?.categories,
          price: item?.price,
          quantity: item?.quantityItem,
          countInStock: item?.countInStock,
          sold: item?.sold,
        })),
        address,
        telephone,
        total,
        method: 0,
      });
    } else {
      showAlert(true, "danger", "Tolong Masukan Alamat Pengiriman!");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  //
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {alert.show && (
          <div className={styles.alertContainer}>
            <Alert {...alert} removeAlert={showAlert} />
          </div>
        )}
        <span className={styles.close} onClick={() => setIsCheckout(false)}>
          X
        </span>
        <h1 className={styles.title}>Pembayaran Cash On Delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Nama</label>
          <input
            placeholder="Isi Lengkap: Ex. Rayhan Naufal"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Nomor Telephone</label>
          <input
            type="text"
            placeholder="Isi Lengkap: Ex. 082386416545"
            className={styles.input}
            onChange={(e) => setTelephone(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Alamat</label>
          <textarea
            rows={5}
            placeholder="Isi Lengkap: Ex. Jl. Raya Bogor No.KM.24 No.40, RT.6/RW.1, Susukan, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13770"
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
