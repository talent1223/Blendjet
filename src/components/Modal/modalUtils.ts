const MODAL_FADE_DURATION = 600;

/** Calculates the width of the browser scroll bar */
function getScrollbarWidth(): number {
  // Width of <html> excluding scroll bar
  const documentWidth = document.documentElement.clientWidth;
  // Width of window including scroll bar
  const windowWidth = window.innerWidth;
  // Return the difference
  return windowWidth - documentWidth;
}

/** Hides the scrollbar. Call this right before opening a modal. */
export function hideScrollbar(): void {
  // Get the scrollbar width for the current browser
  const scrollbarWidth = getScrollbarWidth();
  // Hide the scroll bar
  document.documentElement.style.overflow = 'hidden';
  // Add margin to compensate (to prevent shift).
  document.documentElement.style.marginRight = `${scrollbarWidth}px`;
}

/** Restores the scrollbar. Call this before closing a modal. */
export function restoreScrollbar(): void {
  // Add a slight delay so that curtain fade out has already started
  setTimeout(() => {
    document.documentElement.style.overflow = '';
    document.documentElement.style.marginRight = '';
  }, MODAL_FADE_DURATION);
}
