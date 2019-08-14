function Toggler(el, options) {
  const defaultOptions = {
    activeClass: "is-active"
  };

  options = Object.assign(defaultOptions, options);

  el.addEventListener("click", function() {
    toggle();
  });

  function toggle() {
    if (options.target) {
      const target = document.querySelector(options.target);

      if (target) {
        target.classList.toggle(options.activeClass);
      } else {
        console.error("Can't find target element");
      }
    } else {
      el.classList.toggle(options.activeClass);
    }
  }
}
