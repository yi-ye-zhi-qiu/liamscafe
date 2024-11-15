import { BsChevronRight, BsCodeSquare, BsFileEarmarkText, BsX } from "react-icons/bs";
import { useOverlayContext } from "../context/overlay";
import { AiFillRightCircle } from "react-icons/ai";

export default function ViewDetails({ article, show }) {
  const [overlayIndex, setOverlayIndex] = useOverlayContext();
  return (
    <div
      className={`${
        // Optional: fade in transition
        show ? "flex flex-col absolute z-20" : "hidden"
      } xl:max-h-fit left-0 right-0 m-auto md:mt-0 xl:mt-32 xl:border rounded-md bg-white xl:max-w-4xl pb-20`}
    >
      <div className="fixed xl:relative w-full h-12 max-w-[inherit] backdrop-blur flex justify-between items-center p-10">
        <h1>
          <a href="#carousel" onClick={() => {setOverlayIndex(-1)}}>Pâtisserie</a> <BsChevronRight className="inline-block" /> {article.title}
        </h1>
        <BsX
          className="w-8 h-8 hover:cursor-pointer"
          // Closes article on click of icon.
          onClick={() => {
            setOverlayIndex(-1);
          }}
        />
      </div>
      {/* Article content  */}
      <div className="pr-10 pl-10 xl:pt-0 pt-12">
        <div className="text-md flex flex-col gap-y-10 pt-8">
          <h1 className="text-left text-3xl">{article.title}</h1>
          <div className="flex flex-col">
            {/* <p>{article.date}</p> */}
            {/* hover:underline text-[#2997FF] */}
            {article.preBulletData.map((l) => (
              <div>{l}</div>
            ))}
          </div>
          <p>{article.type}</p>
          <b>Key achievements:</b>
          <div className="flex flex-col gap-y-3 ml-10 mr-12">
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
