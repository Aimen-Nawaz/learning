import "../styles/universityCard.css";
import { uniCardInfo } from "../assets/uniCardInfo";
import studentImg from "../images/image22.jpg";

function UniversityCard() {
  return (
    <div className="uniCardWrapper">

      <h1 className="uniTitle">
        {uniCardInfo.universityName}
      </h1>

      <img className="uniImage" src={studentImg} alt="Student" />

      <h2 className="uniName">{uniCardInfo.name}</h2>

      <p className="uniRow"><span>ID:</span> {uniCardInfo.id}</p>
      <p className="uniRow"><span>Department:</span> {uniCardInfo.department}</p>
      <p className="uniRow"><span>Batch:</span> {uniCardInfo.batch}</p>
      <p className="uniRow"><span>Address:</span> {uniCardInfo.address}</p>

    </div>
  );
}

export default UniversityCard;