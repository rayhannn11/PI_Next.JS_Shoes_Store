import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link
          href="https://www.google.com/maps/dir/-6.3144915,106.8636692/G-SYT+SPORT,+Jl.+Raya+Bogor+No.KM+25+No.+62,+RT.8%2FRW.8,+Susukan,+Kec.+Ciracas,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13740/@-6.3203608,106.859908,16z/data=!3m1!4b1!4m19!1m8!3m7!1s0x2e69ed8f52ec4a25:0xf34cfabc3557cf1!2sG-SYT+SPORT!8m2!3d-6.3262515!4d106.8639758!15sChZ0b2tvIG9sYWhyYWdhIHRlcmRla2F0WhgiFnRva28gb2xhaHJhZ2EgdGVyZGVrYXSSARRzcG9ydGluZ19nb29kc19zdG9yZeABAA!16s%2Fg%2F11qmppc1w5!4m9!1m1!4e1!1m5!1m1!1s0x2e69ed8f52ec4a25:0xf34cfabc3557cf1!2m2!1d106.8639758!2d-6.3262515!3e0"
          target="_blank"
        >
          <Image src="/img/map.jpg" objectFit="cover" layout="fill" alt="MAP" />
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            MENJUAL SEPATU DENGAN KUALITAS PREMIUM DENGAN HARGA TERJANGKAU.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>KONTAK KAMI</h1>

          <p className={styles.text}>
            <span className={styles.info}>INSTAGRAM :</span> gsytsport
          </p>

          <p className={styles.text}>
            <span className={styles.info}>WHATSAPP :</span> +62 812 6765 4336
          </p>

          <p className={styles.text}>
            <span className={styles.info}>ALAMAT :</span>
            Jl. Raya Bogor No.KM 25 No. 62, RT.8/RW.8, Susukan, Kec. Ciracas,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13740
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>KAMI BUKA PADA</h1>
          <p className={styles.text}>
            SENIN UNTIL JUM'AT
            <br /> 8:00 – 22:00
          </p>
          <p className={styles.text}>
            SABTU - MINGGU
            <br /> 9:00 – 22:30
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
