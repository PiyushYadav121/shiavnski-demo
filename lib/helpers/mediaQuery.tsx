"use client";

import { useState, useEffect } from "react";
import { useMediaQuery as useResponsiveMediaQuery } from "react-responsive";

export function MediaQuery() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isDesktopOrLaptop = useResponsiveMediaQuery({
    query: "(min-width: 800px)",
  });
  const isBigScreen = useResponsiveMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useResponsiveMediaQuery({
    query: "(max-width: 800px)",
  });
  const isPortrait = useResponsiveMediaQuery({
    query: "(orientation: portrait)",
  });
  const isRetina = useResponsiveMediaQuery({
    query: "(min-resolution: 2dppx)",
  });

  return isClient
    ? {
        isDesktopOrLaptop,
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina,
      }
    : {
        isDesktopOrLaptop: false,
        isBigScreen: false,
        isTabletOrMobile: false,
        isPortrait: false,
        isRetina: false,
      };
}
