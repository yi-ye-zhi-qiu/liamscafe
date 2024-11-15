import { useEffect, useState } from "react";
import { articleData } from "../data/carousel/articles";
import { BsArrowLeft, BsArrowRight, BsChevronRight } from "react-icons/bs";
import AddToCart from "./addToCart";
import { useCartContext } from "../context/cart";
import { useOverlayContext } from "../context/overlay";

const Carousel = ({ ...props }) => {
  const [cart, setCart] = useCartContext();
  const [overlayIndex, setOverlayIndex] = useOverlayContext();
  const [data, setData] = useState(articleData);
  const [pos, setPos] = useState(0);
  const goTo = (here) => {
    /* Shuffles slides to go to a specific index
     *  @param here: int index
     */
    // console.log(`In order to get to ${here} from ${pos}, we move ${n} steps left (if n < 0) or right (if n > 0)`);
    let n = (here - pos) % data.length;
    setData([...data.slice(n), ...data.slice(0, n)]);
    setPos(here);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // Auto-rotates items in carousel.
  // Only applies for non-small screen.
  // This is really buggy when the user re-sizes
  // their screen. Point is to disable for mobile,
  // so so long as that works, it's ok.
  useEffect(() => {
    let cycleSeconds = 4.8;
    const timeout = setTimeout(() => {
      if (window.innerWidth > 680) {
        goTo((pos + 1) % data.length);
      }
    }, cycleSeconds * 1000);
    // Clear the timeout to avoid any memory leaks
    return () => clearTimeout(timeout);
  }, [data]);
  return (
    <>
      <div
        {...props}
        className="flex justify-center items-center w-full flex-col gap-y-10 sm:gap-y-0"
      >
        {/* Carousel items */}
        {data.map((obj, index) => (
          <div
            key={obj.id}
            className={`
              flex
              flex-col
              //bg-[#fff0db4d]
              relative
              p-10
              gap-y-10
              max-w-fit
              hover:cursor-pointer
              animate-slideDown
              border
              border-[#5C4033]
              first:mt-10
              sm:border-none                            
              sm:p-10
              sm:absolute
              sm:bg-transparent
              sm:backdrop-blur-lg
              sm:flex-row-reverse
              sm:gap-y-10
            `}
            // Event trigger to blur background and show article on click.
            // Article is absolute position, so we scroll to top of the page.
            // That's a little uncomfortable when the user clicks out of
            // the article (they have to scroll back down), but that's OK.
            onClick={() => {
              setOverlayIndex(obj.overlayIndex) & scrollToTop();
            }}
          >
            <div className="flex justify-center items-center sm:p-4">
              <img src={obj.image} className="h-64 w-64" />
            </div>
            <div className=" bg-transparent flex flex-col gap-y-3 sm:gap-y-4 max-w-xs sm:p-4">
              <h2 className="text-2xl">{obj.title}</h2>
              <p className="text-md min-h-[40%]">{obj.subtitle}</p>
              <p className="hover:underline text-[#2997FF]">
                View details{" "}
                <BsChevronRight className="inline-block mt-[-2px]" />
              </p>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <AddToCart item={obj.productId} cart={cart} setCart={setCart} />
              </div>
            </div>
          </div>
        ))}
        {/* Arrows allowing user to cycle left/right */}
        <button
          className="z-10 hidden sm:inline-block absolute sm:mr-[680px] md:mr-[720px]"
          onClick={() =>
            goTo(pos - 1 < 0 ? data.length - 1 : (pos - 1) % data.length)
          }
        >
          <BsArrowLeft />
        </button>
        <button
          className="z-10 hidden sm:inline-block absolute sm:ml-[680px] md:ml-[720px]"
          onClick={() => goTo((pos + 1) % data.length)}
        >
          <BsArrowRight />
        </button>
      </div>
      {/* Dots after (absolute-positioned) carousel indicating position */}
      <div className="z-10 hidden m-auto mt-64 sm:flex justify-evenly row-reverse items-end w-24">
        {data.map((_, index) => (
          <button
            onClick={() => goTo(index)}
            key={index}
            // Template literal used to control 'active' class
            className={`${
              pos === index ? "active" : ""
            } transition-all ease-in-out duration-700 rounded-full w-4 h-4 bg-stone-300 [&.active]:bg-[#5C4033]`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Carousel;