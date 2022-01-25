/* Example HTML
  ...
*/

export default function Navbar(el: HTMLElement) {
  const activeClassName = "-navbarMenuExpanded";

  this.el = el;
  this.isMenuExpanded = false as boolean;

  this.init = () => {
    this.elMenuToggler = this.el.querySelector(
      "#menu-toggler"
    ) as HTMLButtonElement;

    if (this.elMenuToggler == null) return;

    this.menuTogglerClick();
  };

  this.menuTogglerClick = () => {
    this.elMenuToggler.addEventListener("click", () => {
      if (this.isMenuExpanded === true) {
        this.collapseMenu();
      } else {
        this.expandMenu();
      }
    });
  };

  this.collapseMenu = () => {
    this.isMenuExpanded = false;
    this.elMenuToggler.setAttribute(
      "aria-expanded",
      this.isMenuExpanded.toString()
    );
    document.documentElement.classList.remove(activeClassName);
  };

  this.expandMenu = () => {
    this.isMenuExpanded = true;
    this.elMenuToggler.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add(activeClassName);
    document.addEventListener("click", (e: any) => this.menuBlur(e));
  };

  this.menuBlur = (e: any) => {
    if (!this.el.contains(e.target)) {
      this.collapseMenu();
      document.removeEventListener("click", () => this.menuBlur(e));
    }
  };
}
