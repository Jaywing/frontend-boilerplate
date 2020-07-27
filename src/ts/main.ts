// Import Node Modules
import Promise from "es6-promise";
import LazyLoad from "vanilla-lazyload";

import dataJsModule from "./modules/extendables/dataJsModule";

// Promise fallback
if (!window.Promise) {
  window.Promise = Promise;
}

// forEach fallback
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// Run LazyLoad
const lazyload = new LazyLoad({
  elements_selector: ".js-lazy",
});

// data-js modules
const dataJsElements = document.querySelectorAll("[data-js]");

for (let i = 0; i < dataJsElements.length; i++) {
  const el = dataJsElements[i];

  const dataJsValue = el.getAttribute("data-js");
  const dataJsModules: Array<string> = dataJsValue
    .split(" ")
    .map(function (item) {
      return item.trim();
    });

  let options = [{}];
  const dataOptions = el.getAttribute(`data-js-options`);

  if (dataOptions) {
    options = JSON.parse(dataOptions);
  }

  for (let name = 0; name < dataJsModules.length; name++) {
    import(`./modules/${dataJsModules[name]}`).then((Module) => {
      const module: dataJsModule = new Module.default(el, options[name]);
      module.init();
    });
  }
}
