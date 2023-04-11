import styles from "../styles/Cart.module.css";
import Image from "next/image";

const cart = () => {
  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.left}>
        <div className={styles.titleCart}>Cart Items</div>
        <div className={styles.itemsContainer}>
          <div className={styles.itemContainer}>
            <Image src="/img/shoes.jpg" alt="" width="160" height="160" />
            <div className={styles.infoContainer}>
              <div className={styles.itemTitle}>Nike Air Foce 1 React</div>
              <div className={styles.Category}>Male Shoes</div>
              {/* Item Option */}
              <div className={styles.cartOptionContainer}>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Size</p>
                  <select className={styles.cartOptionSelect}>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                  </select>
                </div>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Quantity</p>
                  <select className={styles.cartOptionSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* Item Option End*/}
              <button className={styles.removeItem}>Remove</button>
            </div>
            <div className={styles.price}>Rp 1,908,000</div>
          </div>
          <div className={styles.hrItems}></div>
          <div className={styles.itemContainer}>
            <Image src="/img/shoes.jpg" alt="" width="160" height="160" />
            <div className={styles.infoContainer}>
              <div className={styles.itemTitle}>Nike Air Foce 1 React</div>
              <div className={styles.Category}>Male Shoes</div>
              {/* Item Option */}
              <div className={styles.cartOptionContainer}>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Size</p>
                  <select className={styles.cartOptionSelect}>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                  </select>
                </div>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Quantity</p>
                  <select className={styles.cartOptionSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* Item Option End*/}
              <button className={styles.removeItem}>Remove</button>
            </div>
            <div className={styles.price}>Rp 1,908,000</div>
          </div>
          <div className={styles.hrItems}></div>
          <div className={styles.itemContainer}>
            <Image src="/img/shoes.jpg" alt="" width="160" height="160" />
            <div className={styles.infoContainer}>
              <div className={styles.itemTitle}>Nike Air Foce 1 React</div>
              <div className={styles.Category}>Male Shoes</div>
              {/* Item Option */}
              <div className={styles.cartOptionContainer}>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Size</p>
                  <select className={styles.cartOptionSelect}>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                  </select>
                </div>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Quantity</p>
                  <select className={styles.cartOptionSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* Item Option End*/}
              <button className={styles.removeItem}>Remove</button>
            </div>
            <div className={styles.price}>Rp 1,908,000</div>
          </div>
          <div className={styles.hrItems}></div>
          <div className={styles.itemContainer}>
            <Image src="/img/shoes.jpg" alt="" width="160" height="160" />
            <div className={styles.infoContainer}>
              <div className={styles.itemTitle}>Nike Air Foce 1 React</div>
              <div className={styles.Category}>Male Shoes</div>
              {/* Item Option */}
              <div className={styles.cartOptionContainer}>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Size</p>
                  <select className={styles.cartOptionSelect}>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                  </select>
                </div>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Quantity</p>
                  <select className={styles.cartOptionSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* Item Option End*/}
              <button className={styles.removeItem}>Remove</button>
            </div>
            <div className={styles.price}>Rp 1,908,000</div>
          </div>
          <div className={styles.hrItems}></div>
          <div className={styles.itemContainer}>
            <Image src="/img/shoes.jpg" alt="" width="160" height="160" />
            <div className={styles.infoContainer}>
              <div className={styles.itemTitle}>Nike Air Foce 1 React</div>
              <div className={styles.Category}>Male Shoes</div>
              {/* Item Option */}
              <div className={styles.cartOptionContainer}>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Size</p>
                  <select className={styles.cartOptionSelect}>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                  </select>
                </div>
                <div className={styles.cartOption}>
                  <p className={styles.cartOptionTitle}>Quantity</p>
                  <select className={styles.cartOptionSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* Item Option End*/}
              <button className={styles.removeItem}>Remove</button>
            </div>
            <div className={styles.price}>Rp 1,908,000</div>
          </div>
          <div className={styles.hrItems}></div>
        </div>
      </div>
      {/* Right */}
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <p className={styles.totalTextTitle}>Subtotal:</p>Rp. 1,729,000
          </div>
          <div className={styles.totalText}>
            <p className={styles.totalTextTitle}>Estimasi Biaya Pengiriman:</p>
            Rp. 0.00
          </div>
          <div className={styles.totalText}>
            <p className={styles.totalTextTitle}>Total:</p>Rp. 1,729,000
          </div>
          <div className={styles.hr}></div>
          <button className={styles.button}>CHECKOUT NOW!</button>
          <button className={styles.buttonClear}>Clear All Cart</button>
        </div>
      </div>
    </div>
  );
};

export default cart;
