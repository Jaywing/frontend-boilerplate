"use strict";

var jsElements = document.querySelectorAll("[data-js]");

var _loop = function _loop(i) {
  var el = jsElements[i];
  var jsElementFunctions = el.getAttribute("data-js");
  jsElementFunctions = jsElementFunctions.split(" ").map(function (item) {
    return item.trim(jsElementFunctions);
  });
  var options = {};
  var dataOptions = el.getAttribute("data-js-options");

  if (dataOptions) {
    options = JSON.parse(dataOptions);
  }

  for (var _i = 0; _i < jsElementFunctions.length; _i++) {
    window[jsElementFunctions[_i]](el, options[_i]);
  }
};

for (var i = 0; i < jsElements.length; i++) {
  _loop(i);
}
"use strict";

function Toggler(el, options) {
  var optionsDefaults = {
    activeClass: "is-active"
  };
  options = Object.assign(optionsDefaults, options);
  el.addEventListener("click", function () {
    toggle();
  });

  function toggle() {
    if (options.target) {
      var target = document.querySelector(options.target);

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
//# sourceMappingURL=maps/index.js.map
