import { useEffect, useState } from "react";
import { BsBag, BsX } from "react-icons/bs";
import NavBarCart from "./navBarCart";
import { useCartContext } from "../context/cart";
import { useOverlayContext } from "../context/overlay";
import Link from "next/link";

export default function NavBar() {
  const [cart, setCart] = useCartContext();
  const [overlayIndex, setOverlayIndex] = useOverlayContext();
  const [showCart, setShowCart] = useState(false);
  // If the user clicks outside of overlay, this
  // sets overlayIndex to -1. This unblurs the
  // background.
  // We want it to close the cart too.
  useEffect(() => {
    overlayIndex == -1 ? setShowCart(false) : null;
  });
  return (
    <>
      <div
        className={`${
          showCart ? "z-30" : "z-10"
        } bg-[#fff] overflow-hidden backdrop-blur-sm fixed w-full flex flex-col items-center justify-center text-sm`}
      >
        <div className="w-full sm: w-1/2 md:w-3/4 xl:w-1/2 max-w-full h-12 gap-x-10 justify-between flex p-4 rounded">
          <Link href="/#hero" className="grow text-left">
            Liam&apos;s Caf&eacute;
          </Link>
          {/* <a href="">Resume</a> */}
          <Link href="/#hero">Specials</Link>
          <Link href="/#carousel">Pâtisserie</Link>
          <div
            className={`${cart.length > 0 ? "hover:cursor-pointer" : ""}`}
            onClick={() => {
              cart.length > 0
                ? // True:  -showCart = -true  = -1 => no overlay
                  // False: -showCart = -false = -0 => overlay active
                  setShowCart(!showCart) & setOverlayIndex(-showCart)
                : null;
            }}
          >
            <div>
              <BsBag className="h-5 w-5" />
              <div className="absolute mt-[-8px] ml-[10px]">
                <div
                  className={`${
                    cart.length > 0 ? "flex" : "hidden"
                  } justify-center items-center rounded-full bg-[#5C4033] text-white h-3 w-3 text-xs`}
                >
                  {cart.length}
                </div>
              </div>
            </div>
            {/* On small screens, bag icon replaced with X */}
            <div className={`${showCart ? "inline-block" : "hidden"}`}>
              <BsX className="h-8 w-8 inline-block sm:hidden absolute bg-white ml-[-6px] mt-[-40px]" />
            </div>
          </div>
        </div>
        <div
          className={`${
            showCart ? "animate-slideDown animate-fadeIn" : "animate-fadeOut"
          } flex w-full justify-center bg-white`}
        >
          <div className="w-full sm:w-1/2 flex-col p-10 justify-center gap-y-10 border-bottom">
            <NavBarCart cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
}
