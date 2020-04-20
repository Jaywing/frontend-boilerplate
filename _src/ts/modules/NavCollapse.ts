import dataJsModule from "./extendables/dataJsModule";
import animateIn from "./helpers/animateIn";
import animateOut from "./helpers/animateOut";

export default class Collapse extends dataJsModule {
  options: {
    target: string;
  };
  target: HTMLElement;

  init() {
    this.target = document.querySelector(this.options.target);

    if (this.target) {
      this.clickWindow();
    }
  }

  clickWindow() {
    window.addEventListener("click", (e: any) => {
      if (e.target === this.el || this.el.contains(e.target)) {
        if (this.el.getAttribute("aria-expanded") === "false") {
          this.expand();
        } else {
          this.collapse();
        }
      } else if (!this.target.contains(e.target)) {
        if (this.el.getAttribute("aria-expanded") === "true") {
          this.collapse();
        }
      }
    });
  }

  collapse() {
    this.el.classList.add("collapsed");
    this.el.setAttribute("aria-expanded", "false");
    animateOut(this.target, "fade-out", 300);
    document.documentElement.classList.remove("navbar-active");
  }

  expand() {
    this.el.classList.remove("collapsed");
    this.el.setAttribute("aria-expanded", "true");
    this.target.style.display = "block";
    animateIn(this.target, "fade-in", 300);
    document.documentElement.classList.add("navbar-active");
  }
}
