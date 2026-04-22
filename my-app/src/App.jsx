import "./styles/BusinessCard.css";
import "./styles/Card.css";   

import { cards } from "./assets/CardData";
import BusinessCardFront from "./components/BusinessCardFront";
import BusinessCardBack from "./components/BusinessCardBack";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <div className="container">
        <BusinessCardFront card={cards[0]} />
        <BusinessCardBack card={cards[0]} />
      </div>

      <CardList />
    </>
  );
}

export default App;