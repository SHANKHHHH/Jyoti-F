// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({ top: 0, behavior: "instant" }); // or "smooth"
  }, [pathname]);

  return null;
};

export default ScrollToTop;
