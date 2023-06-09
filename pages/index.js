import ItemList from "@/components/ItemList";
import Slider from "@/components/Slider";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Ari Shoes</title>
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
      <main>
        <Slider />
        <ItemList products={products} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://pi-next-js-shoes-store-ztis.vercel.app/api/products"
  );
  return {
    props: {
      products: res.data,
    },
  };
};
