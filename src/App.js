import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "Iphone",
    type: "mobile",
    price: 10000,
    color: "black",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
