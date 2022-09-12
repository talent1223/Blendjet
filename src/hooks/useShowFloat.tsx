import { useState, useEffect } from 'preact/hooks';
import { debounce } from '../lib/utils';

export function useShowFloat(initial: boolean = false) {
  const [showFloat, setShowFloat] = useState(initial);

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth <= 767) {
        // We're mobile, under 768
        if (window.scrollY < 900) {
          // User has scrolled a little, but not very far
          setShowFloat(false);
        } else {
          // Now user has scrolled quite a ways
          setShowFloat(true);
        }
      }
    }

    const handleDebouncedScroll = debounce(handleScroll, 0);

    window.addEventListener('scroll', handleDebouncedScroll, {
      passive: true,
    });
    return () => {
      window.addEventListener('scroll', handleDebouncedScroll);
    };
  }, []);

  return { showFloat };
}
