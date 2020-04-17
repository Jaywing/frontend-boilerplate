import dataJsModule from "./extendables/dataJsModule";

export default class Collapse extends dataJsModule {
  options: {
    target: string;
  };
  target: HTMLElement;

  init() {
    this.clickToggler();
  }

  clickToggler() {
    this.target = document.querySelector(this.options.target);

    if (this.target) {
      this.el.addEventListener("click", e => {
        e.preventDefault();

        if (this.el.classList.contains("collapsed")) {
          this.expand();
        } else {
          this.collapse();
        }
      });
    }
  }

  collapse() {
    this.el.classList.add("collapsed");
    this.el.setAttribute("aria-expanded", "false");
    this.target.classList.remove("show");
  }

  expand() {
    this.el.classList.remove("collapsed");
    this.el.setAttribute("aria-expanded", "true");
    this.target.classList.add("show");
  }
}
