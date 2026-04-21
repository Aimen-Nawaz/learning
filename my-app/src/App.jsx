import './App.css'
import { cards } from './assets/CardData'
import BusinessCardFront from './components/BusinessCardFront'
import BusinessCardBack from './components/BusinessCardBack'

function App() {
  return (
    <div className="container">

      {/* ONLY ONE CARD */}
      <div className="card-wrapper">
        <BusinessCardFront card={cards[0]} />
        <BusinessCardBack card={cards[0]} />
      </div>

    </div>
  )
}

export default App

