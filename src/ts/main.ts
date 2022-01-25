// Import Node Modules
import LazyLoad from "vanilla-lazyload";
import Navbar from "./modules/Navbar";

// LazyLoad
const lazyload = new LazyLoad({
  elements_selector: ".js-lazy",
});

// Navbar
const elNavbar = document.querySelector("#navbar") as HTMLElement;

if (elNavbar) {
  const navbar = new (Navbar as any)(elNavbar);
  navbar.init();
}

/* Data JS Modules

Add data-js atrribute to HTML element
e.g   <div data-js="ModuleName"></div>

It's possible to add multiple modules to a data-js attribute
e.g   <div data-js="ModuleOne ModuleTwo"></div>

*/

const dataJsElements = document.querySelectorAll(
  "[data-js]"
) as NodeListOf<HTMLElement>;

if (dataJsElements.length) {
  dataJsElements.forEach((element) => {
    const dataJsValue = element.dataset.js;

    const dataJsModules = dataJsValue.split(" ").map((item) => {
      return item.trim();
    }) as string[];

    dataJsModules.map((module) => {
      import(`./modules/${module}`).then((Module) => {
        new (Module as any).default(element).init();
      });
    });
  });
}
