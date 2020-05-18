import dataJsModule from "./extendables/dataJsModule";
import animateIn from "./helpers/animateIn";
import animateOut from "./helpers/animateOut";
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

  show() {
    if (!getCookie("cookies_policy")) {
      animateIn(this.el, "fade-in", 400, () => {
        this.el.style.display = "block";
      });
    }
  }

  close() {
    this.closeButton = this.el.querySelector(".js-close");

    if (this.closeButton) {
      this.closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        animateOut(this.el, "fade-out", 400, () => {
          this.el.style.display = "";
        });
      });
    }
  }

  accept() {
    this.acceptButton = this.el.querySelector(".js-accept");

    if (this.acceptButton) {
      this.acceptButton.addEventListener("click", (e) => {
        e.preventDefault();
        setCookie("cookies_policy", "accepted", 365);
        animateOut(this.el, "fade-out", 400, () => {
          this.el.style.display = "";
        });
      });
    }
  }
}
