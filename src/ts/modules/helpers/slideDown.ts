export default function slideDown(el: HTMLElement, height: number) {
  let bodyHeight = 0;
  let interval = setInterval(frame, 1);

  function frame() {
    if (bodyHeight === height) {
      clearInterval(interval);
    } else {
      bodyHeight++;
      el.style.height = bodyHeight + "px";
    }
  }
}
