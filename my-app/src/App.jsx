import "./styles/BusinessCard.css";
import { cards } from "./assets/CardData";
import BusinessCardFront from "./components/BusinessCardFront";
import BusinessCardBack from "./components/BusinessCardBack";


function App() {
  return (
    <div className="container">
      <BusinessCardFront card={cards[0]} />
      <BusinessCardBack card={cards[0]} />
    </div>
  );
}

export default App;