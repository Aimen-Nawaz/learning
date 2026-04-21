import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
const cardsInfo = [
  {
    id: 1,
    img: "../images/image2.jpg",
    title: "Heading Here",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
     icon: <FaFacebook />
    
  },
  {
    id: 2,
    img: "../images/sunset-forest-walk-stockcake.webp",
    title: "Heading Here",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
     icon: <FaInstagram />
  },
  {
    id: 3,
    img: "../images/images11.jpg",
    title: "Heading Here",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    icons: [<FaWhatsapp />, <FaTwitter />]
    
  }
];
