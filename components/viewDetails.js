import {
  BsChevronRight,
  BsX,
} from "react-icons/bs";
import { useOverlayContext } from "../context/overlay";

export default function ViewDetails({ article, show }) {
  const [overlayIndex, setOverlayIndex] = useOverlayContext();
  return (
    <div
      className={`${
        // Optional: fade in transition
        show ? "flex flex-col absolute z-20" : "hidden"
      } top-0 md:top-auto left-0 right-0 m-auto md:mt-0 xl:mt-0 xl:border rounded-md bg-white xl:max-w-4xl pb-20`}
    >
      <div
        // This controls the X button and breadcrumbs. These are fixed at the top for mobile devices,
        // as the user loses sight of them otherwise.
        className={`
          fixed
          md:relative
          w-full
          h-12
          max-w-[inherit]
          backdrop-blur
          flex
          justify-between
          items-center
          p-10
        `}
      >
        <h1>
          <a
            href="#carousel"
            onClick={() => {
              setOverlayIndex(-1);
            }}
          >
            Pâtisserie
          </a>{" "}
          <BsChevronRight className="inline-block" /> {article.title}
        </h1>
        <a href={`#carousel-${article.id}`}>
          <BsX
            className="w-8 h-8 hover:cursor-pointer"
            // Closes article on click of icon.            
            onClick={() => {
              setOverlayIndex(-1)
            }}
          />
        </a>
      </div>
      {/* Article content  */}
      <div className="pr-10 pl-10 xl:pt-0 pt-12">
        <div className="text-md flex flex-col gap-y-3">
          <h1 className="text-left text-3xl pt-10 md:pt-0">{article.title}</h1>
          <div className="flex flex-col">
            {/* <p>{article.date}</p> */}
            {/* hover:underline text-[#2997FF] */}
            {article.preBulletData.map((l) => (
              <div>{l}</div>
            ))}
          </div>
          <p>{article.type}</p>
          <b>Key achievements:</b>
          <div className="text-s flex flex-col gap-y-2 ml-10 mr-12">
            {article.bullets.map((i) => (
              <li>{i}</li>
            ))}
          </div>
          {/* <b>Project gallery:</b> */}
        </div>
      </div>
    </div>
  );
}
