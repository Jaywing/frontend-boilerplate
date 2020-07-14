import dataJsModule from "./extendables/dataJsModule";

export default class ImgObjectFitFallback extends dataJsModule {
  images: NodeList;

  init() {
    if ("objectFit" in document.documentElement.style === false) {
      this.images = this.el.querySelectorAll(".js-object-fit");

      if (this.images.length) {
        for (let i = 0; i < this.images.length; i++) {
          const img = this.images[i];
          const wrapper = document.createElement("div");
          wrapper.classList.add("img-object-fit");
          img.parentNode.insertBefore(wrapper, img);
          wrapper.appendChild(img);
          wrapper.style.backgroundImage = `url(${img.src})`;
        }
      }
    }
  }
}
