import styles from "../styles/Cart.module.css";
import Image from "next/image";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProduct,
  clearCart,
  getTotals,
  removeFromCart,
  updateCartQty,
} from "@/redux/cartSlice";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Shipment from "@/components/Shipment";
import axios from "axios";
import { useRouter } from "next/router";

const cart = () => {
  const cartPersist = JSON.parse(localStorage.getItem("persist:root"))?.cart;
  const { products, quantity, total } = cartPersist && JSON.parse(cartPersist);

  const cart = useSelector((state) => state.cart);
  const [productsScreen, setProductsScreen] = useState(products);
  const [quantityScreen, setQuantityScreen] = useState(quantity);
  const [totalScreen, setTotalScreen] = useState(total);
  const [isCheckout, setIsCheckout] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const productState = useCallback(
    (products, quantity, total) => {
      setProductsScreen(products);
      setQuantityScreen(quantity);
      setTotalScreen(total);
    },
    [products, quantity, total, isCheckout, cart, cartPersist]
  );

  useEffect(() => {
    productState(products, quantity, total);
  }, [products, quantity, total, isCheckout, cart]);

  // Number Format
  var nf = new Intl.NumberFormat();
  // Get All Totals
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  // ClearItemCart
  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item));
  };
  // ClearAllCart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // CreateOrderFunction
  const createOrder = async (data) => {
    const productIdArr = data.products.map((item) => item.productId);
    const productId = productIdArr.toString();

    const countInStockArr = data.products.map((item) => item.countInStock);
    const currentCountInStockString = countInStockArr.toString();
    const currentCountInStock = parseInt(currentCountInStockString);

    const soldArr = data.products.map((item) => item.sold);
    const currentSoldString = soldArr.toString();
    const currentSold = parseInt(currentSoldString);

    const qtyArr = data.products.map((item) => item.quantity);
    const currentQtyString = qtyArr.toString();
    const currentQty = parseInt(currentQtyString);

    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);

      if (res.status === 201) {
        try {
          await axios.put("http://localhost:3000/api/products/" + productId, {
            countInStock: currentCountInStock - currentQty,
            sold: currentSold + currentQty,
          });
          dispatch(clearCart());
          router.push(`/order/${res.data._id}`);
          setIsCheckout(false);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>{`(${quantityScreen}) Cart`}</title>
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
        {/* left */}
        <div className={styles.left}>
          <div className={styles.titleCart}>
            Keranjang Belanja {`(${quantityScreen})`}
          </div>
          <div className={styles.hrTitleCart}></div>
          {cart.quantity === 0 ? (
            <>
              <h3 className={styles.emptyCart}>
                Tidak ada barang didalam keranjang belanja anda.
              </h3>
            </>
          ) : (
            <>
              {/* Cart Items Start */}
              {productsScreen.map((item) => (
                <div className={styles.itemsContainer} key={item?.idProduct}>
                  {/* Cart Item Start */}
                  <div className={styles.itemContainer}>
                    <Image src={item?.img} alt="" width="160" height="160" />
                    <div className={styles.infoContainer}>
                      <div className={styles.itemTitle}>
                        <Link href={`/product/${item?._id}`}>
                          {item?.title}
                        </Link>
                      </div>
                      <div className={styles.Category}>
                        {item?.categories?.map((categorie) => (
                          <p key={categorie}>
                            {categorie
                              .split(" ")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}{" "}
                            Shoes
                          </p>
                        ))}
                      </div>
                      {/* Item Option */}
                      <div className={styles.cartOptionContainer}>
                        <div className={styles.cartOption}>
                          <p className={styles.cartOptionTitle}>Size</p>
                          <select
                            className={styles.cartOptionSelect}
                            value={item?.selectedSize}
                            onChange={(e) =>
                              dispatch(
                                updateCartQty({
                                  ...item,
                                  selectedSize: Number(e.target.value),
                                })
                              )
                            }
                          >
                            {item?.size?.map((size) => (
                              <option key={size}>{size}</option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.cartOption}>
                          <p className={styles.cartOptionTitle}>Quantity</p>
                          <select
                            className={styles.cartOptionSelect}
                            value={item?.quantityItem}
                            onChange={(e) =>
                              dispatch(
                                updateCartQty({
                                  ...item,
                                  quantityItem: Number(e.target.value),
                                })
                              )
                            }
                          >
                            {[...Array(item?.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {/* Item Option End*/}
                      <button
                        className={styles.removeItem}
                        onClick={() => handleRemoveCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className={styles.price}>
                      Rp {nf.format(item?.price * item?.quantityItem)}
                    </div>
                  </div>
                  <div className={styles.hrItems}></div>
                  {/* Cart Item End */}
                </div>
              ))}
              {/* Cart Items End */}
            </>
          )}
        </div>
        {/* Right */}
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>TOTAL BELANJA</h2>
            <div className={styles.totalText}>
              <p className={styles.totalTextTitle}>Subtotal:</p>
              {quantityScreen === 0
                ? " Rp. 0.00"
                : ` Rp. ${nf.format(totalScreen)}`}
            </div>
            <div className={styles.totalText}>
              <p className={styles.totalTextTitle}>
                Estimasi Biaya Pengiriman:
              </p>
              {quantityScreen === 0 ? " Rp. 0.00" : `Rp. 25,000`}
            </div>
            <div className={styles.totalText}>
              <p className={styles.totalTextTitle}>Total:</p>
              {quantityScreen === 0
                ? " Rp. 0.00"
                : ` Rp. ${nf.format(totalScreen + 25000)} `}
            </div>
            <div className={styles.hr}></div>
            {/* Button */}
            {cart.quantity === 0 ? (
              <button
                className={
                  cart.quantity === 0 ? styles.buttonFade : styles.button
                }
              >
                CHECKOUT SEKARANG!
              </button>
            ) : (
              <button
                className={
                  cart.quantity === 0 ? styles.buttonFade : styles.button
                }
                onClick={() => setIsCheckout(true)}
              >
                CHECKOUT SEKARANG!
              </button>
            )}
            <button
              className={
                cart.quantity === 0 ? styles.buttonFade : styles.buttonClear
              }
              onClick={handleClearCart}
            >
              BERSIHKAN KERANJANG BELANJA
            </button>
          </div>
        </div>
        {isCheckout && (
          <Shipment
            products={productsScreen}
            total={totalScreen}
            setIsCheckout={setIsCheckout}
            createOrder={createOrder}
          />
        )}
      </div>
    </>
  );
};

export default cart;
