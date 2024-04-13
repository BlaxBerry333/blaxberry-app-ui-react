// toggle show app full screen
export function toggleFullScreen() {
  isFullScreen() ? exitFullScreen() : enterFullScreen(document.documentElement);
}

/**
 * @example
 * enterFullScreen(document.documentElement)
 */
export function enterFullScreen(element: HTMLElement): void {
  if (element.requestFullscreen) {
    element.requestFullscreen().catch(() => {
      // `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
    });
  }
  // if (element.mozRequestFullscreen) element.mozRequestFullscreen();
  // if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
  // if (element.msRequestFullscreen) element.msRequestFullscreen();
}

/**
 * @example
 * exitFullScreen()
 */
export function exitFullScreen(): void {
  if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {
      // `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
    });
  }
  // if (document.mozCancelFullscreen) document.exitFullscreen();
  // if (document.exitFullscreen) document.exitFullscreen();
  // if (document.exitFullscreen) document.exitFullscreen();
  // if (document.exitFullscreen) document.exitFullscreen();
}

export function isFullScreen(): boolean {
  return !!(
    document.fullscreenElement
    // || document.mozFullscreenElement ||
    // document.webkitFullscreenElement ||
    // document.msFullscreenElement
  );
}

// document.documentElement
export interface DocumentElementWithFullscreen extends HTMLElement {
  mozRequestFullscreen?: Element;
  webkitRequestFullscreen?: Element;
  msRequestFullscreen?: Element;
}

// document
export interface DocumentWithFullscreen extends Document {
  mozCancelFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
}
