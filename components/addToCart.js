/* Add To Cart button */

import { BsDash, BsPlus } from "react-icons/bs";
import { useCartContext } from "../context/cart";

const AddToCart = ({ item }) => {
  const [cart, setCart] = useCartContext()

  const addToCart = (item) => {
    // NOTE: Can only add 1 item at a time
    setCart((cart) => [...cart, item]);
  };

  const removeFromCart = (item) => {
    let n = cart.indexOf(item) % cart.length;
    setCart([...cart.slice(n + 1), ...cart.slice(0, n)]);
  };

  const Button = () => {
    let itemCount = cart.filter((x) => x == item).length;
    if (itemCount == 0) {
      return (
        <button
          className="w-full h-12 text-center"
          onClick={() => addToCart(item)}
        >
          Add to Order
        </button>
      );
    } else {
      return (
        <div className="grid grid-cols-3 gap-0 h-12 w-full">
          <button
            className="flex justify-center items-center"
            onClick={() => removeFromCart(item)}
          >
            <BsDash />
          </button>
          <h2 className="flex justify-center items-center">
            {itemCount} in Bag
          </h2>
          <button
            className="flex justify-center items-center"
            onClick={() => addToCart(item)}
          >
            <BsPlus />
          </button>
        </div>
      );
    }
  };

  return (
    <div className="border w-full rounded transition group transition-duration-700">
      {/* This causes button to move down on click, but is a little buggy active:translate-y-1  */}
      <div className="w-full h-full group relative overflow-hidden">
        <Button />
        <div className="absolute top-0 -inset-full h-14 w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-stone-200 to-white opacity-20 group-hover:animate-shine" />
      </div>
    </div>
  );
};

export default AddToCart;
