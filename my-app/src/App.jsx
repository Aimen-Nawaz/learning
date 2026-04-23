import "./styles/BusinessCard.css";
import "./styles/Card.css";   

import { cards } from "./assets/CardData";
import BusinessCardFront from "./components/BusinessCardFront";
import BusinessCardBack from "./components/BusinessCardBack";
import CardList from "./components/CardList";

import Dashboard from "./components/Dashboard";
import UniversityCard from "./components/UniversityCard";

function App() {
  return (
    <>
      <div className="container">
        <BusinessCardFront card={cards[0]} />
        <BusinessCardBack card={cards[0]} />
      </div>

      <CardList />
       <Dashboard />
          
      <UniversityCard />
    

      
    </>
  );
}

export default App;