

import "../../styles/Flower.css";

import Header from "./Header/Header";
import ProductList from "../lists/ProductList";
import Footer from "./footer/Footer";
import ProductCard from "./Products/ProductCard";
import About from "./About/About";
import Contact from "./About/Contact";

function FlowerWeb() {
  return (
    <>
      <Header />
      <ProductList />
      <About />
      <Contact/>
      <Footer />
    </>
  );
}

export default FlowerWeb;