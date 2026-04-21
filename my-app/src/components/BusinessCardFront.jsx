import { FaBriefcase } from "react-icons/fa";

function BusinessCardFront({ card }) {
  return (
    <div className="card">
      <div className="top-blue"></div>
      <div className="top-blue-right"></div>

      <div className="logo">
        <FaBriefcase />
      </div>

      <div className="company">{card.company}</div>
      <div className="slogan">{card.slogan}</div>
    </div>
  );
}

export default BusinessCardFront;