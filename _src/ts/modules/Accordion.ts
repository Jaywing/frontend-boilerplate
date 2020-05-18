import dataJsModule from "./extendables/dataJsModule";
import animateOut from "./helpers/animateOut";
import animateIn from "./helpers/animateIn";

export default class Accordion extends dataJsModule {
  items: NodeListOf<HTMLElement>;

  init() {
    this.items = this.el.querySelectorAll(".js-accordion-item");

    if (this.items.length) {
      this.items.forEach((item: HTMLElement) => {
        const header: HTMLElement = item.querySelector(".js-accordion-header");
        const body: HTMLElement = item.querySelector(".js-accordion-body");

        if (header && body) {
          header.addEventListener("click", (e) => {
            e.preventDefault();

            if (header.getAttribute("aria-expanded") === "false") {
              this.closeAll(item);

              header.setAttribute("aria-expanded", "true");
              // animateIn(body, "slide-expand", 400, () => {});
              body.classList.add("show");
            } else {
              this.closeAll();
            }
          });
        }
      });
    }
  }

  closeAll(itemToExclude?: HTMLElement) {
    let allHeaders: Array<HTMLElement> = Array.from(
      this.el.querySelectorAll(".js-accordion-header")
    );

    let allBodies: Array<HTMLElement> = Array.from(
      this.el.querySelectorAll(".js-accordion-body")
    );

    if (itemToExclude) {
      allHeaders = allHeaders.filter(
        (i: HTMLElement) =>
          i !== itemToExclude.querySelector(".js-accordion-header")
      );
      allBodies = allBodies.filter(
        (i: HTMLElement) =>
          i !== itemToExclude.querySelector(".js-accordion-body")
      );
    }

    if (allHeaders.length) {
      allHeaders.forEach((header: HTMLElement) => {
        header.setAttribute("aria-expanded", "false");
      });
    }

    if (allBodies.length) {
      allBodies.forEach((body: HTMLElement) => {
        body.classList.remove("show");
        // animateOut(body, "slide-collapse", 400, () => {});
      });
    }
  }
}
