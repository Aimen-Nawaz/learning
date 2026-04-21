import img1 from "../images/image2.jpg";
import img2 from "../images/sunset-forest-walk-stockcake.webp";
import img3 from "../images/images11.jpg";

export const cardsInfo = [
  {
    id: 1,
    img: img1,
    title: "Heading Here",
    text: "Lorem ipsum dolor sit amet...",
    icon: <FaFacebook />
  },
  {
    id: 2,
    img: img2,
    title: "Heading Here",
    text: "Lorem ipsum dolor sit amet...",
    icon: <FaInstagram />
  },
  {
    id: 3,
    img: img3,
    title: "Heading Here",
    text: "Lorem ipsum dolor sit amet...",
    icons: [<FaWhatsapp />, <FaTwitter />]
  }
];
