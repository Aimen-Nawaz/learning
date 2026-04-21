import "./Card.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
export default function App() {
  return (
    <div className="flex">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.img} alt="" />
          <h1>{card.title}</h1>
          <p>{card.text}</p>

          {Array.isArray(card.icons) ? (
            card.icons.map((icon, i) => (
              <span key={i}>{icon}</span>
            ))
          ) : (
            <span>{card.icon}</span>
          )}
        </div>
      ))}
    </div>
  );
}