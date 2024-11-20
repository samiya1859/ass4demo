// pages/index.tsx
import Head from "next/head";
import GallerySection from "../components/GallerySection";
import SecondNav from "../components/SecondNav";
import InformationSection from "../components/InformationSection";
import Booking from "../components/Booking";
import RoomDescription from "../components/RoomDescription";
import AboutProperty from "@/components/AboutProperty";
import AmenitiesAndQuestions from "@/components/AmenitiesAndQuestions";
import RatingReviews from "../components/RatingReviews";
import HostInfo from "../components/HostInfo";
import ContactHost from "../components/ContactHost";

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
      <div>
        <SecondNav />
      </div>
      <InformationSection />
      <Booking />
      <RoomDescription />
      <AboutProperty />
      <AmenitiesAndQuestions />
      <RatingReviews />
      <HostInfo />
      <ContactHost />
    </>
  );
};

export default Home;
