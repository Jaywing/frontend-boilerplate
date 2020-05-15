import dataJsModule from "./extendables/dataJsModule";

export default class Accordion extends dataJsModule {
  items: NodeListOf<HTMLElement>;

  init() {
    this.items = this.el.querySelectorAll(".js-accordion-item");

    if (this.items.length) {
      this.items.forEach((item) => {
        const header = item.querySelector(".js-accordion-header");
        const body = item.querySelector(".js-accordion-body");

        if (header && body) {
          header.addEventListener("click", (e) => {
            e.preventDefault();

            if (header.getAttribute("aria-expanded") === "false") {
              this.closeAll();

              header.setAttribute("aria-expanded", "true");
              body.classList.add("show");
            } else {
              this.closeAll();
            }
          });
        }
      });
    }
  }

  closeAll() {
    const allHeaders = this.el.querySelectorAll(".js-accordion-header");

    if (allHeaders.length) {
      allHeaders.forEach((header) => {
        header.setAttribute("aria-expanded", "false");
      });
    }

    const allBodies = this.el.querySelectorAll(".js-accordion-body");

    if (allBodies.length) {
      allBodies.forEach((body) => {
        body.classList.remove("show");
      });
    }
  }
}
