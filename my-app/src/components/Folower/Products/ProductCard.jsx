import rose from "../../../images/rose.jpg";
import pink from "../../../images/pink.jpeg";
import sun from "../../../images/sun.jpg";
import tulip from "../../../images/tulip.jpg";

const products = [
    { id: 1, name: "Rose Bouquet", price: 10, img: rose },
    { id: 2, name: "Pink Flower", price: 20, img: pink },
    { id: 3, name: "Sun Flower", price: 30, img: sun },
    { id: 4, name: "Tulip Bouquet", price: 40, img: tulip },
];

const ProductCard = ({ name, price, image }) => {
    return (

        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">${price}</p>
            <button>Add to Cart</button>
        </div>
    );
};
export default ProductCard;