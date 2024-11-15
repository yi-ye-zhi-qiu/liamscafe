import IndeterminateLoadingBar from "./indeterminateLoadingBar";
import TextScrollTicker from "./textScroll";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <IndeterminateLoadingBar />
      <TextScrollTicker
        wordsArray={[
          "Grab a seat by the window",
          "You came at a good time",
          "Coffee is for anytime of the day",
        ]}
      />
    </div>
  );
}
