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
          } else if (entry.target instanceof HTMLPictureElement) {
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

    image.classList.remove("js-lazy");
    this.observer.unobserve(image);
  }

  loadPicture(picture: HTMLPictureElement) {
    for (const source in picture.children) {
      const pictureSource: any = picture.children[source];

      if (
        pictureSource instanceof HTMLSourceElement &&
        pictureSource.dataset.srcset
      ) {
        pictureSource.srcset = pictureSource.dataset.srcset;
      }

      // TODO: Lazy load fall back image
    }

    picture.classList.remove("js-lazy");
    this.observer.unobserve(picture);
  }

  loadVideo(video: HTMLVideoElement) {
    for (const source in video.children) {
      const videoSource: any = video.children[source];

      if (videoSource instanceof HTMLSourceElement && videoSource.dataset.src) {
        videoSource.src = videoSource.dataset.src;
      }
    }

    video.load();
    video.classList.remove("js-lazy");
    this.observer.unobserve(video);
  }
}
