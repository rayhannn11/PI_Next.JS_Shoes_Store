import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link
          href="https://www.google.com/maps/place/ARI+SHOES+SPORT/@-6.3145055,106.8634189,18.5z/data=!4m6!3m5!1s0x2e69ed072a616e77:0xc680da7968bf5b34!8m2!3d-6.3146254!4d106.8632761!16s%2Fg%2F11r6s23xdk"
          target="_blank"
        >
          <Image
            src="/img/ari-shoes-map2.jpg"
            objectFit="cover"
            layout="fill"
            alt="MAP"
            style={{
              border: "1px solid #d5d4d4",
            }}
          />
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            MENJUAL SEPATU KUALITAS PREMIUM DENGAN HARGA TERJANGKAU.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>KONTAK KAMI</h1>

          <p className={styles.text}>
            <span className={styles.info}>WHATSAPP : </span> +62 823-8641-6545
          </p>

          <p className={styles.text}>
            <span className={styles.info}>ALAMAT : </span>
            <span className={styles.info}>
              {" "}
              Jl. Raya Bogor No.KM.24 No.40, RT.6/RW.1, Susukan, Kec. Ciracas,
              Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13770{" "}
            </span>
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>KAMI BUKA PADA</h1>
          <p className={styles.text}>
            SENIN - JUM'AT
            <br /> 1:00 PM – 23:00 PM
          </p>
          <p className={styles.text}>
            SABTU - MINGGU
            <br /> 1:00 PM – 23:30 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
