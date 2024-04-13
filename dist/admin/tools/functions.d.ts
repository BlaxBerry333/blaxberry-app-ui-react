export declare function toggleFullScreen(): void;
/**
 * @example
 * enterFullScreen(document.documentElement)
 */
export declare function enterFullScreen(element: HTMLElement): void;
/**
 * @example
 * exitFullScreen()
 */
export declare function exitFullScreen(): void;
export declare function isFullScreen(): boolean;
export interface DocumentElementWithFullscreen extends HTMLElement {
    mozRequestFullscreen?: Element;
    webkitRequestFullscreen?: Element;
    msRequestFullscreen?: Element;
}
export interface DocumentWithFullscreen extends Document {
    mozCancelFullscreen?: () => void;
    webkitExitFullscreen?: () => void;
    msExitFullscreen?: () => void;
}
