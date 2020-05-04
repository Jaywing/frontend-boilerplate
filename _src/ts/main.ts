// Import Node Modules
import "intersection-observer";

// Import Project Modules
import dataJsModule from "./modules/extendables/dataJsModule";
import LazyLoad from "./modules/LazyLoad";

// Includes
import "./includes/promise";
import "./includes/tableOverflow";

// Run LazyLoad module
const lazyLoad = new LazyLoad();
lazyLoad.init();

// data-js modules
const dataJsElements = document.querySelectorAll("[data-js]");

for (let i = 0; i < dataJsElements.length; i++) {
  const el = dataJsElements[i];

  const dataJsValue = el.getAttribute("data-js");
  const dataJsModules: any = dataJsValue.split(" ").map(function (item) {
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
