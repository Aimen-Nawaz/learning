import "./styles/BusinessCard.css";
import "./styles/Card.css";  

import { cards } from "./assets/CardData";
import BusinessCardFront from "./components/card/BusinessCardFront";
import BusinessCardBack from "./components/card/BusinessCardBack";
import CardList from "./components/card/CardList";

import Dashboard from "./components/DashBoard/Dashboard";
import "./styles/DashBoard.css"
import UniversityCard from "./components/card/UniversityCard";
import "./styles/ListTask.css";
import { ListTask } from "./assets/ListTask";
import List from "./components/lists/List.jsx";
import FlowerWeb from "./components/Folower/FlowerWeb.jsx";
import { loginData} from "./assets/LoginData.js";
import Login from "./components/Forms/Login.jsx";
import "./styles/Login.css"

import "./styles/form.css"
import LoginForm from "./components/Forms/LoginForm.jsx";
import SignupForm from "./components/Forms/SignupForm.jsx";
import { loginFields, signupFields } from "./assets/forminfo.js";
import PartyForm from "./components/Forms/PartyForm.jsx";
import "./styles/Party.css";



function App() {
  return (
    <>
      <div className="containerB">
        <BusinessCardFront card={cards[0]} />
        <BusinessCardBack card={cards[0]} />
      </div>

      <CardList />
       {/* <Dashboard /> */}
          
      <UniversityCard />
      <List/>
      <FlowerWeb />
      <Login/>
      {/* <form/> */}
 <div className="auth-page">
      <LoginForm />
      <SignupForm />
</div>
      <PartyForm/>
       
      
    </>
  );
}

export default App;