import {
  BsX,
  BsChevronRight,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";
import Link from "next/link";
import { useOverlayContext } from "../context/overlay";
import { articleData } from "../data/carousel/articles";

export default function ViewDetails({ article, show }) {
  const [overlayIndex, setOverlayIndex] = useOverlayContext();
  return (
    <div
      className={`${
        // Optional: fade in transition
        show ? "flex flex-col fixed z-30 overflow-y-auto" : "hidden"
      }
        top-0
        md:top-10
        left-0
        right-0
        m-auto
        md:mt-0 xl:mt-0 xl:border
        rounded-md
        bg-white
        xl:max-w-4xl
        min-h-screen
        max-h-screen
        md:bottom-10
        md:min-h-0
        md:max-h-[calc(100vh-5rem)]
      `}
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
              setOverlayIndex(-1);
            }}
          />
        </a>
      </div>
      {/* Article content  */}
      <div className="pr-10 pl-10 xl:pt-0 pt-12 pb-8">
        <div className="text-md flex flex-col gap-y-3">
          <h1 className="text-left text-3xl pt-10 md:pt-0">{article.title}</h1>
          {article.role && (
            <div className="flex flex-col">
              <p>
                <b>{article.role}:</b>{" "}
                <Link
                  className="!text-blue-500 underline"
                  href={article.company?.href}
                >
                  {article.company?.name}
                </Link>
              </p>
              <p>{article.date}</p>
              {article.description && (
                <p className="text-sm mt-2">{article.description}</p>
              )}
            </div>
          )}
          <hr className="mt-2 mb-8 border-black/15" />
          <ul className="flex flex-row text-md list-none gap-3">
            {article.links.map((link, i) => (
              <li
                key={i}
                className="border border-black/15 rounded-full px-4 py-1"
              >
                <Link
                  href={link.href}
                  {...(link.download ? { download: link.download } : {})}
                >
                  {link.label}{" "}
                  <BsArrowRightShort className="inline-block align-middle text-sm ml-1" />
                </Link>
              </li>
            ))}
          </ul>
          <b>Key achievements:</b>
          {article.sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-y-2">
              {section.heading && <b className="text-sm">{section.heading}</b>}
              <div className="text-s flex flex-col gap-y-2 ml-10 mr-12">
                {section.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-auto sticky bottom-0 flex">
        {[...articleData]
          .sort((a, b) => a.overlayIndex - b.overlayIndex)
          .flatMap((_, __, arr) => {
            const i = arr.findIndex((a) => a.id === article.id);
            return [
              arr[(i - 1 + arr.length) % arr.length],
              arr[(i + 1) % arr.length],
            ];
          })
          .slice(0, 2)
          .map((v, idx) => (
            <button
              key={v.id}
              className={`w-1/2 p-2 text-white border-2 ${
                idx === 0
                  ? "text-left border-[#5C4033] bg-[#5C4033]"
                  : "text-right border-lavender-100 bg-lavender-100"
              }`}
              onClick={() => setOverlayIndex(v.overlayIndex)}
            >
              {idx === 0 ? (
                <>
                  <BsArrowLeftShort className="inline-block align-middle" />
                  {v.title}
                </>
              ) : (
                <>
                  {v.title}
                  <BsArrowRightShort className="inline-block align-middle" />
                </>
              )}
            </button>
          ))}
      </div>
    </div>
  );
}
