/* Example HTML
  ...
*/

export default function Dropdown(el: HTMLElement) {
  const activeClassName = "-expanded";

  this.el = el;
  this.isExpanded = false as boolean;

  this.init = () => {
    this.elToggler = this.el.querySelector(".js-Toggler") as HTMLButtonElement;
    if (this.elToggler == null) return;

    this.togglerClick();
  };

  this.togglerClick = () => {
    this.elToggler.addEventListener("click", () => {
      if (this.isExpanded === true) {
        this.collapseDropdown();
      } else {
        this.expandDropdown();
      }
    });
  };

  this.collapseDropdown = () => {
    this.isExpanded = false;
    this.elToggler.setAttribute("aria-expanded", this.isExpanded.toString());
    this.el.classList.remove(activeClassName);
  };

  this.expandDropdown = () => {
    this.isExpanded = true;
    this.elToggler.setAttribute("aria-expanded", this.isExpanded.toString());
    this.el.classList.add(activeClassName);
    document.addEventListener("click", (e: any) => this.dropdownBlur(e));
  };

  this.dropdownBlur = (e: any) => {
    if (!this.el.contains(e.target)) {
      this.collapseDropdown();
      document.removeEventListener("click", () => this.dropdownBlur(e));
    }
  };
}
