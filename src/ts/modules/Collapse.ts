import dataJsModule from "./extendables/dataJsModule";

export default class Collapse extends dataJsModule {
  options: {
    target: string;
  };
  target: HTMLElement;

  init() {
    this.clickToggler();
  }

  private clickToggler() {
    this.target = document.querySelector(this.options.target);

    if (this.target) {
      this.el.addEventListener("click", (e) => {
        e.preventDefault();

        if (this.el.getAttribute("aria-expanded") === "false") {
          this.expand();
        } else {
          this.collapse();
        }
      });
    }
  }

  private collapse() {
    this.el.setAttribute("aria-expanded", "false");
    this.target.classList.remove("show");
  }

  private expand() {
    this.el.setAttribute("aria-expanded", "true");
    this.target.classList.add("show");
  }
}
