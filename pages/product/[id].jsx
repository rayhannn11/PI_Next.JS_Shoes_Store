import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { Router, useRouter } from "next/router";
import Alert from "@/components/Alert";

const Product = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantityItem, setQuantityItem] = useState(1);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  // const [indexProduct, setIndexProduct] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();

  // Price Format
  var nf = new Intl.NumberFormat();

  // AddCartFunction
  const handleClick = () => {
    if (selectedSize !== 0) {
      const idProduct = new Date().getTime().toString();
      dispatch(
        addProduct({
          ...item,
          selectedSize,
          quantityItem,
          idProduct,
        })
      );
      router.push("/cart");
    } else {
      showAlert(true, "danger", "Tolong Pilih Ukuran!");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <>
      <Head>
        <title>{item ? item?.title : "Ari Shoes"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700;900&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@1,700&display=swap');
        </style>
      </Head>

      <div className={styles.container}>
        {alert.show && (
          <div className={styles.alertContainer}>
            <Alert {...alert} removeAlert={showAlert} />
          </div>
        )}
        {/* Left for IMAGE */}
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={item?.img} objectFit="contain" layout="fill" alt="" />
          </div>
        </div>
        {/* Right for INFO PRODUCT */}
        <div className={styles.right}>
          <h1 className={styles.title}>{item?.title}</h1>
          {item?.categories.map((categorie) => (
            <h1 className={styles.category} key={categorie}>
              {categorie
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")}
            </h1>
          ))}

          <span className={styles.price}>Rp. {nf.format(item?.price)}</span>
          <p className={styles.desc}>{item?.desc}</p>

          {item.countInStock ? (
            <>
              <h3 className={styles.choose}>Select Size</h3>
              <div className={styles.filterContainer}>
                {item?.size.map((size) => (
                  <select
                    className={
                      size == selectedSize ? styles.active : styles.sizes
                    }
                    key={size}
                    onClick={(e) => setSelectedSize(e.target.value)}
                  >
                    <option className={styles.size}>{size}</option>
                  </select>
                ))}
              </div>

              <div className={styles.stockContainer}>
                <h3 className={styles.choose}>Select Quantity : </h3>
                <select
                  value={quantityItem}
                  onChange={(e) => setQuantityItem(e.target.value)}
                  className={styles.selectQuantity}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              {/* Add And Button Cart */}
              <button className={styles.button} onClick={handleClick}>
                Add to Cart
              </button>
            </>
          ) : (
            <h1 className={styles.outOfStock}>Stock Barang Habis</h1>
          )}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      item: res.data,
    },
  };
};

export default Product;