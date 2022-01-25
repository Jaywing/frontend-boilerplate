/*  Example HTML

    <div class="relative" data-js="Dropdown">
      <button id="exampleDropdown" class="js-Toggler" aria-haspopup="true" aria-expanded="false">
        ...
      </button>

      <div class="Dropdown js-Dropdown" aria-labelledby="exampleDropdown">
        ...
      </div>
    </div>
*/

export default function Dropdown(el: HTMLElement) {
  this.el = el;
  this.isExpanded = false as boolean;

  this.init = () => {
    this.elToggler = this.el.querySelector(".js-Toggler") as HTMLButtonElement;
    if (this.elToggler == null) return;

    this.elDropdown = this.el.querySelector(".js-Dropdown") as HTMLElement;
    if (this.elDropdown == null) return;

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
    this.elDropdown.style.display = "";
  };

  this.expandDropdown = () => {
    this.isExpanded = true;
    this.elToggler.setAttribute("aria-expanded", this.isExpanded.toString());
    this.elDropdown.style.display = "block";
    document.addEventListener("click", (e: any) => this.dropdownBlur(e));
  };

  this.dropdownBlur = (e: any) => {
    if (!this.el.contains(e.target)) {
      this.collapseDropdown();
      document.removeEventListener("click", () => this.dropdownBlur(e));
    }
  };
}
