import dataJsModule from "./extendables/dataJsModule";

export default class NavCollapse extends dataJsModule {
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

  private clickWindow() {
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

  private collapse() {
    this.el.classList.add("collapsed");
    this.el.setAttribute("aria-expanded", "false");
    this.target.style.display = "";
    document.documentElement.classList.remove("navbar-active");
  }

  private expand() {
    this.el.classList.remove("collapsed");
    this.el.setAttribute("aria-expanded", "true");
    this.target.style.display = "block";
    document.documentElement.classList.add("navbar-active");
  }
}
