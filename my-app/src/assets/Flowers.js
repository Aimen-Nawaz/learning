import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import rose from "../images/rose.jpg";
import pink from "../images/pink.jpeg";
import sun from "../images/sun.jpg";
import tulip from "../images/tulip.jpg";
import aboutImg from "../images/images.jpg";

export const heroData = {
  logo: "Flower Shop",
  title: "Fresh Beautiful Flower",
  text: "Make your moments special with our flowers",
  button: "Shop Now",
};

export const products = [
  { id: 1, name: "Rose Bouquet", price: 10, image: rose },
  { id: 2, name: "Pink Flower", price: 20, image: pink },
  { id: 3, name: "Sun Flower", price: 30, image: sun },
  { id: 4, name: "Tulip Bouquet", price: 40, image: tulip },
];

export const about = {
  image: aboutImg,
  title: "About Our Shop",
  text:
    "We provide fresh and beautiful flowers for every occasion. Our flower shop offers bouquets, gifts, and decorations for weddings, birthdays, and special events.",
};

export const contactInfo = {
  title: "Contact Us",
  namePlaceholder: "Your name",
  emailPlaceholder: "Your email",
  messagePlaceholder: "Message",
  footerText: "© 2026 Flower Shop | All rights reserved",
};