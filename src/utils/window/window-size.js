/**
 * Window Size
 *
 * @return {array}    Array of window width and window height
 */
export default function windowSize() {
    const w = window;
    const e = document.documentElement;
    const g = document.getElementsByTagName('body')[0];

    let wWidth = w.innerWidth||e.clientWidth||g.clientWidth;
    let wHeight = w.innerHeight||e.clientHeight||g.clientHeight;

    return [wWidth, wHeight];
}