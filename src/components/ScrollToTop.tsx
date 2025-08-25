import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the top on route change.
 * - If a hash is present (e.g., /how-it-works#auditsync), tries to scroll to that element.
 * - Otherwise, scrolls to page top so the hero is visible.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Handle in-page anchors first
    if (hash) {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        // Smooth scroll to the element
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // No hash or element not found: jump to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
