import dataJsModule from "./extendables/dataJsModule";
import getCookie from "./helpers/getCookie";
import setCookie from "./helpers/setCookie";

export default class CookieConsent extends dataJsModule {
  acceptButton: HTMLElement;
  closeButton: HTMLElement;

  init() {
    this.show();
    this.accept();
    this.close();
  }

  private show() {
    if (!getCookie("cookies_policy")) {
      this.el.style.display = "block";
    }
  }

  private close() {
    this.closeButton = this.el.querySelector(".js-close");

    if (this.closeButton) {
      this.closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.el.style.display = "";
      });
    }
  }

  private accept() {
    this.acceptButton = this.el.querySelector(".js-accept");

    if (this.acceptButton) {
      this.acceptButton.addEventListener("click", (e) => {
        e.preventDefault();
        setCookie("cookies_policy", "accepted", 365);
        this.el.style.display = "";
      });
    }
  }
}
