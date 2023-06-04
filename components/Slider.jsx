import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = () => {
  const images = ["/img/newSlider2.png", "/img/newSlider1.png"];
  const [slideIndex, setSlideIndex] = useState(0);

  // useEffect Untuk Merubah Urutan slide index jika
  // Di pencet mundur dia akan ke array item terakhir
  // Di pencet Maju dia akan ke array item pertama
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [slideIndex]);

  // useEffect Untuk menjalankan setInterval(Menggerakan Slider)

  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 6000);
    return () => {
      clearInterval(slider);
    };
  }, [slideIndex]);

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
