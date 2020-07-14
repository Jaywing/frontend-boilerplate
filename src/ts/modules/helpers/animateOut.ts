export default function animateOut(
  element: HTMLElement,
  animateClass: string, // This should reference a CSS class in _src/scss/utilities/_js-animations.scss
  animationDuration: number,
  hideFunction?: () => void
) {
  element.style.animationDuration = `${animationDuration}ms`;
  element.classList.add(animateClass);

  setTimeout(() => {
    if (hideFunction) {
      hideFunction();
    }
    element.style.animationDuration = "";
    element.classList.remove(animateClass);
  }, animationDuration + 100);
}
