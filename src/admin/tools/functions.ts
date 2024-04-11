// toggle show app full screen
export function toggleFullScreen() {
  const element = document.documentElement;

  if (!document.fullscreenElement) {
    element.requestFullscreen().catch(() => {
      // `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
