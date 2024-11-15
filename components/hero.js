/* Hero section */

import { useState } from "react";
import Render from "./render";
import AddToCart from "./addToCart";
import { useCartContext } from "../context/cart";

export default function Hero() {
  const [cart, setCart] = useCartContext();
  const colors = ["matcha", "lavender", "peach"];
  const [color, setColor] = useState("matcha");
  return (
    <div className="ml-auto mr-auto flex flex-col-reverse justify-center w-full sm:max-w-xl sm:flex-row-reverse">
      <div className="w-inherit mt-[-98px] sm:mt-0 flex h-1/4 flex-col items-start gap-y-4 sm:gap-y-10 p-10 md:p-0 md:mt-4">
        <h1 className="text-xl">Liam Special</h1>
        <h2>Cafe Latte made with milk foam and our signature roast.</h2>
        <p className="text-md">
          Flavor: <b>{color}</b>
        </p>
        <div className="flex w-full gap-x-2 h-8">
          {/* Color swatches */}
          {colors.map((i) => (
            <div key={i}>
              {/* For some reason we must preload these gradients to make template
                  literal syntax used for per-flavor gradient (from-${i}-100) work
              */}
              <div className="hidden from-lavender-100 from-peach-100 from-matcha-100" />
              <button
                key={i}
                className={`${
                  color === i ? "active" : ""
                } from-${i}-100 h-10 w-10 rounded-full bg-gradient-to-br to-stone-100 p-1 [&.active]:ring-2 [&.active]:ring-stone-300`}
                onClick={() => setColor(i)}
                onMouseOver={() => setColor(i)}
              />
            </div>
          ))}
        </div>
        <AddToCart
          cart={cart}
          setCart={setCart}
          item={`P00000${colors.indexOf(color)}`}
        />
      </div>

      <div className="h-[32rem] md:h-[36rem] xl:h-[40rem] max-w-fit m-auto">
        <Render color={color} />
      </div>
    </div>
  );
}
