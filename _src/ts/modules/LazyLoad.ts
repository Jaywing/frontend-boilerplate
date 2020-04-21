export default class LazyLoad {
  lazyElements: NodeList;
  observer: any;

  init() {
    this.lazyElements = document.querySelectorAll(".js-lazy");

    if (this.lazyElements.length) {
      this.initObserver();
    }
  }

  initObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target instanceof HTMLImageElement) {
            this.loadImage(entry.target);
          } else if (entry.target instanceof HTMLVideoElement) {
            this.loadVideo(entry.target);
          } else if (
            typeof entry.target.tagName === "string" &&
            entry.target.tagName === "PICTURE"
          ) {
            this.loadPicture(entry.target);
          }
        }
      });
    });

    this.lazyElements.forEach((lazyElement) => {
      this.observer.observe(lazyElement);
    });
  }

  loadImage(image: HTMLImageElement) {
    if (image.dataset.src) {
      image.src = image.dataset.src;
    }

    if (image.dataset.srcset) {
      image.srcset = image.dataset.srcset;
    }

    this.observer.unobserve(image);
    image.classList.remove("js-lazy");
  }

  loadPicture(picture: Element) {
    for (const source in picture.children) {
      const pictureSource: any = picture.children[source];

      if (
        pictureSource instanceof HTMLSourceElement &&
        pictureSource.dataset.srcset
      ) {
        pictureSource.srcset = pictureSource.dataset.srcset;
      }
    }

    const img = picture.querySelector("img");

    if (img.dataset.src) {
      img.src = img.dataset.src;
    }

    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }

    this.observer.unobserve(picture);
    picture.classList.remove("js-lazy");
  }

  loadVideo(video: HTMLVideoElement) {
    for (const source in video.children) {
      const videoSource: any = video.children[source];

      if (videoSource instanceof HTMLSourceElement && videoSource.dataset.src) {
        videoSource.src = videoSource.dataset.src;
        videoSource.removeAttribute("data-src");
      }
    }

    video.load();
    this.observer.unobserve(video);
    video.classList.remove("js-lazy");
  }
}
