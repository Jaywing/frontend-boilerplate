import dataJsModule from "./extendables/dataJsModule";

export default class Dropdown extends dataJsModule {
  toggler: HTMLElement;
  dropdown: HTMLElement;

  init() {
    this.toggler = this.el.querySelector(".js-toggler");
    this.dropdown = this.el.querySelector(".js-dropdown");

    if (this.toggler && this.dropdown) {
      this.clickToggler();
      this.clickWindow();
    }
  }

  private clickToggler() {
    this.toggler.addEventListener("click", (e) => {
      e.preventDefault();

      if (this.dropdown.style.display === "block") {
        this.collapse();
      } else {
        this.expand();
      }
    });
  }

  private clickWindow() {
    window.addEventListener("click", (e: any) => {
      if (!this.el.contains(e.target)) {
        this.collapse();
      }
    });
  }

  private collapse() {
    this.toggler.setAttribute("aria-expanded", "false");
    this.dropdown.style.display = "";
  }

  private expand() {
    this.toggler.setAttribute("aria-expanded", "true");
    this.dropdown.style.display = "block";
  }
}
