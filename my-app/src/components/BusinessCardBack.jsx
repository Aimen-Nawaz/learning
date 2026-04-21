import { FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";  

function BusinessCardBack({ card }) {
  return (
    <div className="card">


      <MdPerson className="avatar-icon" />

      <div className="name">{card.name}</div>
      <div className="position">{card.role}</div>

      <div className="info-section">
        <div className="box">
          <FaMapMarkerAlt />
          <span>{card.address}</span>
        </div>

        <div className="box">
          <FaPhone />
          <span>{card.phone}</span>
        </div>

        <div className="box">
          <FaGlobe />
          <span>
            {card.email} <br />
            {card.website}
          </span>
        </div>
      </div>

    </div>
  );
}

export default BusinessCardBack;