import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const iconMap = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  whatsapp: <FaWhatsapp />,
  twitter: <FaTwitter />
};

const Card = ({ card }) => {
    return (
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
    )
}

export default Card
