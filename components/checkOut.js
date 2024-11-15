import Link from "next/link";
import { useCartContext } from "../context/cart";

export default function CheckOut() {
  const [cart, setCart] = useCartContext();
  return (
    <>
      <div className="max-w-xl w-1/2 m-auto pb-16">
        <button
          className={`w-full transition-opacity rounded text-2xl text-center p-4 font-bold
            ${
              cart.length == 0
                ? "bg-slate-100 opacity-30 cursor-not-allowed"
                : ""
            }                        
          `}
          title={
            cart.length == 0
              ? "Cannot check-out with empty cart. Please add items before checking out."
              : ""
          }
          disabled={cart.length == 0 ? true : false}
        >
          <Link
            href={{
              pathname: "/receipt",
            }}
            as={`/receipt`}
            className={cart.length == 0 ? "pointer-events-none" : ""}
          >
            Check Out
          </Link>
        </button>
      </div>
    </>
  );
}
