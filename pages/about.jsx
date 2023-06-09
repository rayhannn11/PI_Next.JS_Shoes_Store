import styles from "@/styles/About.module.css";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami</title>
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
        <div className={styles.wrapper}>
          {/* about */}
          <div className={styles.about}>
            <h1 className={styles.title}>Halo! Saya Ari Shoes 👋</h1>
            <div className={styles.hrTitle} />
            <p className={styles.content}>
              {" "}
              Kami adalah sebuah toko yang menawarkan koleksi sepatu premium
              quality yang dijamin akan memuaskan pelanggan. Dari sepatu formal
              hingga sepatu casual, toko kami memiliki berbagai jenis sepatu
              dari brand terkenal seperti adidas, nike, converse, vans dan masih
              banyak lagi. Sepatu yang dijual di toko kami dibuat dari bahan
              berkualitas sehingga sepatu yang dijual tahan lama dan terasa
              premium. Selain itu, toko kami juga menawarkan berbagai pilihan
              warna dan ukuran untuk memastikan bahwa setiap pelanggan dapat
              menemukan sepatu yang sesuai dengan kebutuhan mereka. Tidak hanya
              itu, kami juga menyediakan pelayanan yang ramah dan profesional
              untuk memberikan pengalaman berbelanja yang menyenangkan bagi
              pelanggan. Jadi, jika Anda mencari sepatu premium quality dengan
              desain yang elegan dan kualitas yang terjamin, Silahkan kunjungi
              toko Kami dan temukan sepatu yang sesuai dengan gaya Anda.
            </p>
          </div>
          {/* Contact */}
          <div className={styles.contact}>
            <h1 className={styles.title}>Feedback 🙏</h1>
            <p className={styles.content}>
              Kamu bisa memberi kami masukan, saran dan pertanyaan dengan
              menghubungi whatsapp kami +62 823-8641-6545. Feedback dari kalian
              membantu kami untuk memahami kebutuhan dan harapan yang kalian
              butuhkan, sehingga kami dapat memberikan pelayanan yang lebih baik
              lagi. <i>"Hormat kami Ari Shoes."</i>
            </p>
          </div>
          {/* Question */}
          <div className={styles.question}>
            <div className={styles.questionTitle}>
              Pertanyaan yang sering diajukan
            </div>
            <div className={styles.Hr} />
            <div className={styles.questionWrapper}>
              <div className={styles.questionContent}>
                <div className={styles.contentLeft}>
                  <h3 className={styles.contentHeading}>
                    Seperti apa toko ari shoes?
                  </h3>
                  <p className={styles.contentBody}>
                    Ari shoes adalah sebuah toko sepatu yang menjual sepatu
                    premium dari brand terkenal seperti adidas, nike, converse,
                    vans dan masih banyak lagi.
                  </p>
                </div>
                <div className={styles.contentRight}>
                  <span>^</span>
                </div>
              </div>
              {/* 2 */}
              <div className={styles.questionContent}>
                <div className={styles.contentLeft}>
                  <h3 className={styles.contentHeading}>
                    Bagaimana cara membeli di toko ari shoes?
                  </h3>
                  <p className={styles.contentBody}>
                    Ada dua cara dalam memesan di ari store. Petama kamu bisa
                    memesan menggunakan aplikasi, dimana kami menggunakan{" "}
                    <i>Cash on Delivery</i> sebagai media pembayaran. Kedua kamu
                    bisa mengunjungi toko kami langsung, Kamu bisa membayar
                    secara tunai, ovo, qrish ataupun debit.
                  </p>
                </div>
                <div className={styles.contentRight}>
                  <span>^</span>
                </div>
              </div>
              {/* 3 */}
              <div className={styles.questionContent}>
                <div className={styles.contentLeft}>
                  <h3 className={styles.contentHeading}>
                    Dimana letak toko ari shoes?
                  </h3>
                  <p className={styles.contentBody}>
                    Ari shoes berletak di Jl. Raya Bogor No.KM.24 No.40,
                    RT.6/RW.1, Susukan, Kec. Ciracas, Kota Jakarta Timur, Daerah
                    Khusus Ibukota Jakarta 13770
                  </p>
                </div>
                <div className={styles.contentRight}>
                  <span>^</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default about;
