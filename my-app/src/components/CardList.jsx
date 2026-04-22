import "../styles/Card.css";
import { CardInfo } from "../assets/cardInfo";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const iconMap = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  whatsapp: <FaWhatsapp />,
  twitter: <FaTwitter />
};

function CardList() {
  return (
    <div className="flex">
      {CardInfo.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.img} alt={card.title} />
          <h1>{card.title}</h1>
          <p>{card.text}</p>

          <div className="icons">
            {card.icons?.map((icons, i) => (
              <span key={i} className="icon-item">
                {iconMap[icons]}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;