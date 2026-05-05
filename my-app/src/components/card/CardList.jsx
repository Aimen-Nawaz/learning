import "../../styles/Card.css";
import { CardInfo } from "../../assets/cardInfo";
import Card from "../card/card";


function CardList() {
  return (
    <div className="flex">
      {CardInfo.length > 0 && CardInfo.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default CardList;