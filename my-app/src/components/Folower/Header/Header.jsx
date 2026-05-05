import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import bg from "../../../images/baccck.png";


const Header = () => {

  const clicked = (e) => {
    e.preventDefault();
    console.log("Shop Now button clicked!", e);
    alert("Shop Now button clicked!");
  }

  const hover = () => {
    console.log("Shop Now button hovered!");
  }

  const change = (e) => {
    console.log("Search input changed:", e.target.value);
  }

  return (
    <>
      <header>
        <div className="logo">Flower Shop</div>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>

        <div className="icons">
          <FaSearch />
          <FaHeart />
          <FaShoppingCart />
        </div>
      </header>

      <section className="main"
        style={{ backgroundImage: `url(${bg})` }}>

        <div className="main-text">
          <h1>Fresh Beautiful Flower</h1>
          <p>Make your moments special with our flowers</p>
          <button className="btn" onClick={(e) => clicked(e)} onMouseEnter={hover}>Shop Now</button>
          <div>
            <input type="text" placeholder="Search flowers..." onChange={(e) => change(e)} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;