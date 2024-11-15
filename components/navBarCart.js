// Display items in cart

import { products } from "../data/products";
import { BsX } from "react-icons/bs";
import countOfEachElementInArray from "./utils/countOfEachElementInArray";

const NavBarCart = ({ cart }) => {
  let productMap = countOfEachElementInArray(cart);  
  let cartAmounts = Object.fromEntries(productMap.entries());
  let uniqueProductsInCart = [...productMap.keys()];
  return (
    <>
      <h2 className="text-2xl pb-10">In your bag</h2>
      <div className="flex flex-col gap-y-10 max-h-fit md:max-h-[28rem] overflow-y-auto">
        {uniqueProductsInCart.map((product, index) => (
          <div className="max-w-fit">
            <img
              src={products[product].image}
              className="w-20 h-30 inline-block"
            />
            <div className="float-right p-4 mt-0">
              <b>{products[product].name}</b>
              <div>
                <BsX className="inline-block" />
                <b>{cartAmounts[product]}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBarCart;
