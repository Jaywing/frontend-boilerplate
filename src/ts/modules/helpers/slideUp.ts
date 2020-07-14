export default function slideUp(
  el: HTMLElement,
  height: number,
  callback?: () => void
) {
  let bodyHeight = height;
  let interval = setInterval(frame, 1);

  function frame() {
    if (bodyHeight === 0) {
      clearInterval(interval);
      callback;
    } else {
      bodyHeight--;
      el.style.height = bodyHeight + "px";
    }
  }
}
