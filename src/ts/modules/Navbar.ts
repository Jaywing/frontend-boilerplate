/*  Example HTML

    <header>
      <button id="menu-toggler" type="button" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        ...
      </button>

      <div id="menu">
        ...
      </div>
    </header>
*/

export default function Navbar(el: HTMLElement) {
  this.el = el;
  this.isMenuExpanded = false as boolean;

  this.init = () => {
    this.elMenuToggler = this.el.querySelector(
      "#menu-toggler"
    ) as HTMLButtonElement;
    if (this.elMenuToggler == null) return;

    this.elMenu = this.el.querySelector("#menu") as HTMLElement;
    if (this.elMenu == null) return;

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
    this.elMenu.style.display = "";
    document.documentElement.style.overflow = "";
  };

  this.expandMenu = () => {
    this.isMenuExpanded = true;
    this.elMenuToggler.setAttribute(
      "aria-expanded",
      this.isMenuExpanded.toString()
    );
    this.elMenu.style.display = "block";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("click", (e: any) => this.menuBlur(e));
  };

  this.menuBlur = (e: any) => {
    if (!this.el.contains(e.target)) {
      this.collapseMenu();
      document.removeEventListener("click", () => this.menuBlur(e));
    }
  };
}
