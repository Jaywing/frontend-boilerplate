import dataJsModule from "./extendables/dataJsModule";
import animateOut from "./helpers/animateOut";
import animateIn from "./helpers/animateIn";

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

  clickToggler() {
    this.toggler.addEventListener("click", (e) => {
      e.preventDefault();

      if (this.dropdown.style.display === "block") {
        this.collapse();
      } else {
        this.expand();
      }
    });
  }

  clickWindow() {
    window.addEventListener("click", (e: any) => {
      if (!this.el.contains(e.target)) {
        this.collapse();
      }
    });
  }

  collapse() {
    this.toggler.setAttribute("aria-expanded", "false");
    animateOut(this.dropdown, "fade-out", 300);
  }

  expand() {
    this.toggler.setAttribute("aria-expanded", "true");
    this.dropdown.style.display = "block";
    animateIn(this.dropdown, "fade-in", 300);
  }
}
