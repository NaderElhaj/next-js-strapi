"use client";

import { useEffect, useState } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<any>(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: windowWidth,
    isDesktop: windowWidth >= 1320,
    isTablet: windowWidth < 1320,
    isMobile: windowWidth < 741,
  };
}

export default useWindowWidth;
