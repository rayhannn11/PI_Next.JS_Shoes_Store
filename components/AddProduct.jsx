import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import Alert from "@/components/Alert";

const AddProduct = ({ setIsOpen }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState(null);
  const [countInStock, setCountInStock] = useState(null);
  //   Categories
  const [tempCategories, setTempCategories] = useState(null);
  const [categories, setCategories] = useState([]);
  // size
  const [tempSize, setTempSize] = useState(null);
  const [size, setSize] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [loading, setLoading] = useState(false);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleCategories = () => {
    setCategories((prev) => [...prev, tempCategories]);
    setTempCategories("");
  };

  const handleSize = () => {
    setSize((prev) => [...prev, tempSize]);
    setTempSize("");
  };

  const handleCreate = async () => {
    if (file && title && desc && price && countInStock && categories && size) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "shoe-store");

      try {
        setLoading(true);
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dbcclfazz/image/upload",
          data
        );

        const { url } = uploadRes.data;
        const newProduct = {
          title,
          desc,
          categories,
          size,
          price,
          countInStock,
          img: url,
        };
        await axios.post("http://localhost:3000/api/products", newProduct);
        setLoading(false);
        setIsOpen(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      showAlert(true, "danger", "Tolong Masukan Rincian Product!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {alert.show && (
          <div className={styles.alertContainer}>
            <Alert {...alert} removeAlert={showAlert} />
          </div>
        )}
        <span onClick={() => setIsOpen(false)} className={styles.close}>
          X
        </span>
        <h1 className={styles.title}>Add New Product</h1>
        {/* img */}
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        {/* title */}
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Isi Seperti Ini: Ex. Jordan 1 Mid"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* desc */}
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            placeholder="Isi Seperti Ini: Ex. Outfit your little one with the timeless style of the AJ1 in the Jordan 1 Mid."
            className={styles.textArea}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        {/* Price And CountInStock*/}
        <div className={styles.item}>
          <div className={styles.priceAndStock}>
            <div className={styles.priceAndStockWrapper}>
              <label className={styles.label}>Price</label>
              <div className={styles.priceContainer}>
                <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Isi Seperti Ini: Ex. 1300000"
                  min="1"
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className={styles.priceAndStockWrapper}>
              <label className={styles.label}>Count In Stock</label>
              <div className={styles.priceContainer}>
                <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Isi Seperti Ini: Ex. 10"
                  min="1"
                  onChange={(e) => setCountInStock(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        {/* categories */}
        <div className={styles.item}>
          <div className={styles.optionContainer}>
            <div className={styles.optionInput}>
              <label className={styles.label}>Categories</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Isi Seperti Ini: Ex. pria"
                value={tempCategories}
                onChange={(e) => setTempCategories(e.target.value)}
              />
            </div>

            <button className={styles.optionButton} onClick={handleCategories}>
              Add
            </button>
          </div>
        </div>
        <div className={styles.optionItems}>
          {categories.map((type) => (
            <span key={type} className={styles.optionItem}>
              {type}
            </span>
          ))}
        </div>
        {/* size */}
        <div className={styles.item}>
          <div className={styles.optionContainer}>
            <div className={styles.optionInput}>
              <label className={styles.label}>Size</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Ex. 37"
                value={tempSize}
                onChange={(e) => setTempSize(e.target.value)}
              />
            </div>

            <button className={styles.optionButton} onClick={handleSize}>
              Add
            </button>
          </div>
        </div>
        <div className={styles.optionItems}>
          {size.map((size) => (
            <span key={size} className={styles.optionItem}>
              {size}
            </span>
          ))}
        </div>

        <button className={styles.addButton} onClick={handleCreate}>
          {!loading ? "Create" : "Loading..."}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
