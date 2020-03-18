import dataJsModule from './extendables/dataJsModule';
import getCookie from './helpers/getCookie';
import setCookie from './helpers/setCookie';

export default class CookieConsent extends dataJsModule {
  acceptButton: HTMLElement;

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
    this.acceptButton = this.el.querySelector('.js-accept');

    if (this.acceptButton) {
      this.acceptButton.addEventListener('click', e => {
        e.preventDefault();
        this.el.classList.remove('is-visible');
        setCookie('cookies_policy', 'accepted', 365);
      });
    }
  }
}
