function Toggle(el, options) {
  const optionsDefaults = {
    activeClass: "is-active",
    target: ""
  };

  options = Object.assign(optionsDefaults, options);

  el.addEventListener("click", function() {
    toggle();
  });

  function toggle() {
    if (options.target) {
      const target = document.querySelector(options.target);

      if (target) {
        target.classList.toggle(options.activeClass);
      } else {
        console.error("Can't find target");
      }
    } else {
      el.classList.toggle(options.activeClass);
    }
  }
}
