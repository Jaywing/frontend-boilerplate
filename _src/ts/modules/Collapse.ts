import dataJsModule from './extendables/dataJsModule';

interface ICollapseOptions {
  target: string;
}

export default class Collapse extends dataJsModule {
  target: HTMLElement;
  options: ICollapseOptions;

  init() {
    this.clickToggler();
  }

  clickToggler() {
    this.target = document.querySelector(this.options.target);
    console.log(this.target);

    if (this.target) {
      this.el.addEventListener('click', e => {
        e.preventDefault();

        if (this.el.classList.contains('collapsed')) {
          this.expand();
        } else {
          this.collapse();
        }
      });
    }
  }

  collapse() {
    this.el.classList.add('collapsed');
    this.el.setAttribute('aria-expanded', 'false');
    this.target.classList.remove('show');
  }

  expand() {
    this.el.classList.remove('collapsed');
    this.el.setAttribute('aria-expanded', 'true');
    this.target.classList.add('show');
  }
}
