/* Cycles text vertically slides up */

import { useState } from "react";

const TextScrollTicker = ({ wordsArray }) => {
  /* @param: wordsArray: Array of words to cycle through */
  const [words, setWords] = useState(wordsArray);
  return (
    <div className="relative overflow-hidden h-10 leading-10 text-center">
      {words.map((word, i) => (
        <span key={i} className="animate-slide relative p-2">
          {word}
          <br />
        </span>
      ))}
    </div>
  );
};

export default TextScrollTicker;
