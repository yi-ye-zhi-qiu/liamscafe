// Display items in cart

import { products } from "../data/products";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import countOfEachElementInArray from "./utils/countOfEachElementInArray";
import Barcode from "react-barcode";

const ReceiptCart = ({ cart }) => {

  let productMap = countOfEachElementInArray(cart);
  let cartAmounts = Object.fromEntries(productMap.entries());
  let uniqueProductsInCart = [...productMap.keys()];
  let orderNumber = "080220171225";
  let orderDate = new Date();
  let orderDateString = orderDate.toLocaleString("en-US", {
    // weekday: "short",
    year: "numeric",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    // timeZoneName: "shortGeneric",
    // second: "numeric",
    // hour12: true,
  });
  // let orderPoints = Math.floor(Math.random() * (100 - 1 + 1)) + 1

  return (
    <div className="font-mono w-full h-full flex-col flex items-center justify-center">
      <div className="pt-8 w-[460px] flex flex-col gap-y-2 border-t-4 border-b-4 border-pink-100 relative bg-white">
        {/* <p className="absolute top-2 right-4 text-xs">{orderDateString}</p> */}

        <p className="text-center text-xl">Thank you for stopping by</p>
        <div className="m-auto">
          <Barcode value={`Order No. ${orderNumber}`} height="32" width="1" fontSize="0" />
        </div>
        <p className="text-center mb-10">Order No. {orderNumber}</p>
        {/* <h2 className="text-2xl pb-10">receipt</h2> */}
        <div className="">
          <div className="min-h-[260px] bg-pink-50">
            {uniqueProductsInCart.map((product, index) => (
              <div key={index} className="first:pt-10 pt-1 pr-10 pl-10 w-full flex justify-between">
                <p>{products[product].name}</p>
                {/* <BsX className="inline-block" /> */}
                <p>{cartAmounts[product]}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-row justify-between pr-10 pl-10 mt-10 pb-10">
            <div>
              <p>Delivery Address:</p>
              <p className="text-sm mt-1">Liam&apos;s Caf&eacute;</p>
              <p className="text-sm">San Francisco, CA</p>
            </div>
            <div>
              <p>Contact Me:</p>
              <div className="mt-4 flex flex-row gap-x-1">
                <a href=""><AiFillLinkedin className="h-6 w-6"/></a>
                <a href="https://www.github.com/yi-ye-zhi-qiu"><AiFillGithub className="h-6 w-6"/></a>
                <a href=""><AiOutlineMail className="h-6 w-6"/></a>
              </div>
            </div>
          </div>
          <p className="text-center pt-8 pb-8 underline">
            Download Resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptCart;
