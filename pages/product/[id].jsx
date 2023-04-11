import { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
const Product = () => {
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const pizza = {
    id: 1,
    img: "/img/shoes.jpg",
    name: "Nike Air Force 1 '07",
    category: "Women Shoes",
    size: [36, 37, 38, 39, 40, 41],
    price: 1729000,
    desc: "Channel vintage vibes in every step with this hoops original. Pairing a durable canvas upper with seam overlays and vibrant leather Swoosh details, this heritage-inspired original provides a unique worn-in aesthetic with throwback style. Plus, a hidden Nike Air unit and durable '80s construction add the comfort you've come to expect from the AF-1.",
  };

  //   <div className={styles.infoContainer}></div>

  return (
    <div className={styles.container}>
      {/* Left for IMAGE */}
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      {/* Right for INFO PRODUCT */}
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <h1 className={styles.category}>{pizza.category}</h1>
        <span className={styles.price}>Rp. {pizza.price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Select Size</h3>
        <div className={styles.filterContainer}>
          {pizza.size.map((size) => (
            <div className={styles.sizes} key={size}>
              <h2 className={styles.size}>EU {size}</h2>
            </div>
          ))}
        </div>
        {/* Add And Button Cart */}

        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
