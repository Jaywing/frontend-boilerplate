import dataJsModule from './extendables/dataJsModule';

export default class Dropdown extends dataJsModule {
  parent: HTMLLinkElement;
  children: HTMLDivElement;

  init() {
    this.clickParent();
    this.clickWindow();
  }

  clickParent() {
    this.parent = this.el.querySelector('.js-parent');
    this.children = this.el.querySelector('.js-children');

    if (this.parent && this.children) {
      this.parent.addEventListener('click', e => {
        e.preventDefault();

        if (this.parent.classList.contains('show')) {
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
    this.parent.setAttribute('aria-expanded', 'false');
    this.parent.classList.remove('show');
    this.children.classList.remove('show');
  }

  expand() {
    this.parent.setAttribute('aria-expanded', 'true');
    this.parent.classList.add('show');
    this.children.classList.add('show');
  }
}
