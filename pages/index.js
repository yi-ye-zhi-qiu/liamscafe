import Hero from "../components/hero";
import Carousel from "../components/carousel";
import ViewDetails from "../components/viewDetails";
import NavBar from "../components/navBar";
import { articleData } from "../data/carousel/articles";
import CheckOut from "../components/checkOut";
import Contact from "../components/contact"
import Footer from "../components/footer";
import { useCartContext } from "../context/cart";
import { useOverlayContext } from "../context/overlay";

export default function Page() {
  const [cart, setCart] = useCartContext();
  const [overlayIndex, setOverlayIndex] = useOverlayContext();

  return (
    <div className="bg-[#fff0db66]">
      {/* Overlay div */}
      <div
        className={`${overlayIndex != -1 ? "fixed" : "hidden"}
          z-20 bg-white sm:bg-transparent backdrop-blur-sm h-[100vh] w-full`}
        // If user clicks outside of whatever is on top of overlay,
        // closes overlay.
        onClick={() => {
          setOverlayIndex(-1);
        }}
      />
      {/* Toggle-able article overlay articles (carousel) */}
      {articleData.map((obj, index) => (
        <ViewDetails
          key={obj.id}
          article={obj}
          show={overlayIndex === obj.overlayIndex}
        />
      ))}
      <div className="outline bg-white pt-14 md:p-20 outline-[#5C4033] w-full sm: w-1/2 md:w-3/4 xl:w-1/2 max-w-full m-auto">
        {/* Hero section */}
        <h1
          id="hero"
          className="bg-[#5C4033] font-bold text-center text-2xl sm:mb-14"
        >
          {/* Notre S&eacute;l&eacute;ction */}
          <img
            src="/svg/logo.svg"
            className="m-auto h-[129px] w-[390px] md:mt-0"
          />
        </h1>
        <Hero />
        {/* Carousel */}
        <h1
          id="carousel"
          className="bg-[#5C4033] mt-0 lg:mt-[-60px] text-center font-bold text-2xl "
        >
          {/* Pâtisserie */}
          <img src="/svg/patissiere.svg" className="m-auto h-[129px] w-[250px] md:mt-8" />
        </h1>
        <div className="relative sm:mt-64">
          <Carousel />
        </div>
        {/* Checkout */}
        <h1 className="pt-0 xl:pt-14 text-center text-3xl pb-14 lg:pb-8"></h1>
        {/*
        <div className="pt-20 pb-40">
          <CheckOut />
        </div>
        */}
        <div className="pt-4 pb-40">
          <Contact />
        </div>
      </div>
    </div>
  );
}
