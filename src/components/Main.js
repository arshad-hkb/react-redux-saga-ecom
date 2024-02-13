import { addToCart, emptyCart, removeFromCart } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData);
  console.log("main productData=>", productData);
  const product = {
    name: "Iphone",
    type: "mobile",
    price: 10000,
    color: "black",
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove from cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          Get product list{" "}
        </button>
      </div>
    </div>
  );
}

export default Main;
