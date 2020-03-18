import dataJsModule from './extendables/dataJsModule';

export default class Dropdown extends dataJsModule {
  toggler: HTMLElement;
  dropdown: HTMLElement;

  init() {
    this.clickToggler();
    this.clickWindow();
  }

  clickToggler() {
    this.toggler = this.el.querySelector('.js-toggler');
    this.dropdown = this.el.querySelector('.js-dropdown');

    if (this.toggler && this.dropdown) {
      this.toggler.addEventListener('click', e => {
        e.preventDefault();

        if (this.toggler.classList.contains('show')) {
          this.collapse();
        } else {
          this.expand();
        }
      });
    }
  }

  clickWindow() {
    window.addEventListener('click', (e: any) => {
      if (!this.el.contains(e.target)) {
        this.collapse();
      }
    });
  }

  collapse() {
    this.toggler.setAttribute('aria-expanded', 'false');
    this.toggler.classList.remove('show');
    this.dropdown.classList.remove('show');
  }

  expand() {
    this.toggler.setAttribute('aria-expanded', 'true');
    this.toggler.classList.add('show');
    this.dropdown.classList.add('show');
  }
}
