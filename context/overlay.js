  /*
  What is overlayIndex and why is it set to -1?
  There is an overlay div used to blur background,
  like when the user opens their cart or views a
  carousel item. This div covers the entire one-page
  site.

  Anything with z index > 20 is visible over this
  overlay and will be featured in the foreground.

  It is meant to give the user the impression
  of verticality and layering. The inverse would be
  taking the user to another page on the website
  instead of layering on top a component.

  Different values signify different components.
  Value          Meaning
  -1           : Overlay is inactive
  !=  -1       : Overlay is active
  0            : Cart dropdown from navbar
                 or show receipt is active
  1, 2, ... n  : Carousel item (project article
                 from data/articles.js) of
                 object property n.overlayIndex
                 is active and is rendered via
                 viewDetails.js component.

  Event Triggers:
  - User clicks bag when bag contains non-zero items
  - User clicks on carousel item
  */

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function OverlayProvider({ children }) {
  const [overlayIndex, setOverlayIndex] = useState(-1);
  return (
    <Context.Provider value={[overlayIndex, setOverlayIndex]}>{children}</Context.Provider>
  );
}

export function useOverlayContext() {
  return useContext(Context);
}
