import dataJsModule from "./extendables/dataJsModule";
import slideDown from "./helpers/slideDown";
import slideUp from "./helpers/slideUp";

export default class Accordion extends dataJsModule {
  items: NodeListOf<HTMLElement>;

  init() {
    this.items = this.el.querySelectorAll(".js-accordion-item");

    if (this.items.length) {
      this.items.forEach((item: HTMLElement) => {
        const header: HTMLElement = item.querySelector(".js-accordion-header");
        const body: HTMLElement = item.querySelector(".js-accordion-body");

        let bodyHeight: number;

        if (body.classList.contains("show")) {
          bodyHeight = body.offsetHeight;
        } else {
          body.classList.add("show");
          bodyHeight = body.offsetHeight;
          body.classList.remove("show");
        }

        if (header && body) {
          header.addEventListener("click", (e) => {
            e.preventDefault();

            if (!item.classList.contains("js-accordion-item-active")) {
              this.close();

              item.classList.add("js-accordion-item-active");
              header.setAttribute("aria-expanded", "true");
              body.classList.add("show");
              slideDown(body, bodyHeight);
            } else {
              this.close();
            }
          });
        }
      });
    }
  }

  close() {
    const allItems = this.el.querySelectorAll(".js-accordion-item");

    if (allItems.length) {
      allItems.forEach((item: HTMLElement) => {
        item.classList.remove("js-accordion-item-active");

        const header: HTMLElement = item.querySelector(".js-accordion-header");
        const body: HTMLElement = item.querySelector(".js-accordion-body");

        if (header) {
          header.setAttribute("aria-expanded", "false");
        }

        if (body) {
          slideUp(body, body.offsetHeight, function () {
            body.classList.remove("show");
          });
        }
      });
    }
  }
}
