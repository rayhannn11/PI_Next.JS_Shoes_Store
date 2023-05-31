import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Admin.module.css";
import Head from "next/head";
import AddProduct from "@/components/AddProduct";

const index = ({ orders, products }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const [isOpen, setIsOpen] = useState(false);

  const status = ["Dikemas", "Dikirim", "Selesai"];

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "https://pi-next-js-shoes-store-ztis-hu4rbp253-rayhannn11.vercel.app/api/products/" +
          id
      );
      setProductList(productList.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    console.log(item);
    // Status And Paid
    const currentStatus = item?.status;
    const currentPaid = item?.paid;

    try {
      const res = await axios.put(
        "https://pi-next-js-shoes-store-ztis-hu4rbp253-rayhannn11.vercel.app/api/orders/" +
          id,
        {
          status: currentStatus + 1,
          paid: currentPaid + 1,
        }
      );
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  var nf = new Intl.NumberFormat();

  return (
    <>
      <Head>
        <title>Admin Panel</title>
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
        {isOpen && <AddProduct setIsOpen={setIsOpen} />}
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className={styles.mainAddButton}
          >
            Add Product
          </button>
        ) : (
          ""
        )}

        {/* Products */}
        <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {productList.map((product) => (
              <tbody key={product._id}>
                <tr className={styles.trTitle}>
                  <td>
                    <Image
                      src={product.img}
                      width={70}
                      height={70}
                      objectFit="cover"
                      alt=""
                    />
                  </td>
                  <td>{product._id.slice(0, 5)}...</td>
                  <td>{product.title}</td>
                  <td>Rp. {nf.format(product.price)}</td>
                  <td>
                    {/* <button className={styles.button}>Edit</button> */}
                    <button
                      className={styles.button}
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {/* Orders */}
        <div className={styles.item}>
          <h1 className={styles.title}>Orders</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tbody>
            {orderList.map((order) => (
              <tbody key={order?._id}>
                <tr className={styles.trTitle}>
                  <td>{order?._id.slice(0, 5)}...</td>
                  <td>{order?.customer}</td>
                  <td>Rp. {nf.format(order?.total)}</td>
                  <td>
                    {order?.paid < 2 ? (
                      <span className={styles.belumBayar}>Belum Bayar</span>
                    ) : (
                      <span className={styles.lunas}>Lunas</span>
                    )}
                  </td>
                  <td>{status[order?.status]}</td>
                  <td>
                    {order?.status < 2 ? (
                      <button
                        className={styles.buttonStage}
                        onClick={() => handleStatus(order?._id)}
                      >
                        Next Stage
                      </button>
                    ) : (
                      "Selesai"
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get(
    "https://pi-next-js-shoes-store-ztis-hu4rbp253-rayhannn11.vercel.app/api/products"
  );
  const orderRes = await axios.get(
    "https://pi-next-js-shoes-store-ztis-hu4rbp253-rayhannn11.vercel.app/api/orders"
  );

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default index;
