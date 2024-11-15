import { useState } from "react";

const IndeterminateLoadingBar = () => {
  /*
  This is an indeterminate progress bar 
  used for loading.
  */

  return (    
    <div
      aria-hidden="true"
      role="progressbar"
      className="h-0 top-0 left-0 w-full fixed overflow-hidden h-8 rounded opacity-100 overflow-hidden transition-opacity duration-250 linear w-full overflow-hidden"
    >
      <div className="bg-[length:20px_8px] bg-repeat-x bg-[#FFB74D] invisible h-full w-full absolute"></div>
      <div className="w-full absolute h-[8px]" />
      <div className="animate-primaryIndeterminateTranslate absolute h-[8px] w-full">
        <span className="bg-gradient-to-r from-peach-100 to-lavender-100 inline-block h-full absolute w-full animate-primaryIndeterminateScale" />
      </div>
      <div className="animate-auxiliaryIndeterminateTranslate visible origin-top-left h-[8px] w-full absolute ">
        <span className="animate-primaryIndeterminateScale bg-matcha-50 inline-block w-full h-full absolute" />
      </div>
    </div>
  );
};

export default IndeterminateLoadingBar;
