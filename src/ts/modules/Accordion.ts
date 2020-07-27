import dataJsModule from "./extendables/dataJsModule";

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

            if (!item.classList.contains("is-active")) {
              this.closeAll();

              item.classList.add("is-active");
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

  private closeAll() {
    const allItems = this.el.querySelectorAll(".js-accordion-item");

    if (allItems.length) {
      allItems.forEach((item: HTMLElement) => {
        item.classList.remove("is-active");

        const header: HTMLElement = item.querySelector(".js-accordion-header");
        const body: HTMLElement = item.querySelector(".js-accordion-body");

        if (header) {
          header.setAttribute("aria-expanded", "false");
        }

        if (body) {
          body.classList.remove("show");
        }
      });
    }
  }
}
