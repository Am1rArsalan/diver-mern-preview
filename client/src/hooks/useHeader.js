import useScrollPos from "./useScrollPos";
import { useState, useEffect } from "react";
import * as Scroll from "react-scroll";

// useHeader hook
export default function () {
  const [show, setSearchBar] = useState(false);
  const scrollPos = useScrollPos();
  const scrolled = scrollPos !== 0;

  useEffect(() => {
    const scroll = Scroll.animateScroll;
    if (show && scrolled) {
      scroll.scrollTo(2.2);
    }
  }, [show, scrolled]);

  function toggleShowSearchBar() {
    setSearchBar(!show);
  }

  return { showSearchBar: show, toggleShowSearchBar, scrolled };
}
