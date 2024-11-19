// pages/index.tsx
import Head from "next/head";
import GallerySection from "../components/GallerySection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Hotel Booking</title>
        <meta
          name="description"
          content="Explore the best hotels and book your stay!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* Gallery Section */}
        <GallerySection />
      </div>
    </>
  );
};

export default Home;
