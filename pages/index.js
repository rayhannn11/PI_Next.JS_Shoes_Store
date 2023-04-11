import ItemList from "@/components/ItemList";
import Slider from "@/components/Slider";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>G-SYT Sport</title>
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
        <ItemList />
      </main>
    </>
  );
}
