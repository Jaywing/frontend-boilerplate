import dataJsModule from './extendables/dataJsModule';
import getCookie from './helpers/getCookie';
import setCookie from './helpers/setCookie';

export default class CookieAlert extends dataJsModule {
  closeButton: HTMLButtonElement;

  init() {
    this.show();
    this.hide();
  }

  show() {
    if (!getCookie('cookies_policy')) {
      this.el.classList.add('is-visible');
    }
  }

  hide() {
    this.closeButton = this.el.querySelector('.js-close');

    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.el.classList.remove('is-visible');
        setCookie('cookies_policy', 'accepted', 365);
      });
    }
  }
}
