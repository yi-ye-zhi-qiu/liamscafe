import { useEffect } from "react";
import ReceiptCart from "../components/receiptCart";
import { useCartContext } from "../context/cart";
import { useOverlayContext } from "../context/overlay";

export default function Receipt() {
  const [cart, setCart] = useCartContext();
  const [overlayIndex, setOverlayIndex] = useOverlayContext();

  return (    
    <div className="h-screen">
      <div
        className={`${overlayIndex != -1 ? "fixed" : "hidden"}
          z-20 bg-white sm:bg-transparent backdrop-blur-sm h-[100vh] w-full`}
        // If user clicks outside of whatever is on top of overlay,
        // closes overlay.
        onClick={() => {
          setOverlayIndex(-1);
        }}
      />
      <ReceiptCart cart={cart} />
    </div>
  );
}
