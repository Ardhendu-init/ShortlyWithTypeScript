import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Converter from "../components/Converter";
import Info from "../components/Info";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Converter />
      <Info />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
