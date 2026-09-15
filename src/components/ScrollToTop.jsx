import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position on route changes, and scrolls to the target section
// when the URL carries a hash (e.g. /#services) — including from other pages,
// which React Router doesn't do on its own.
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [pathname, hash, key]);

  return null;
}
