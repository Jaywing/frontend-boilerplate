import dataJsModule from "./extendables/dataJsModule";

export default class VideoBackgroundCover extends dataJsModule {
  video: {
    width: number;
    height: number;
    ratio: number;
  };
  container: {
    width: number;
    height: number;
    ratio: number;
  };

  init() {
    this.windowResize();
    this.windowOrientationChange();
    this.positionVideo();
  }

  windowResize() {
    window.addEventListener("resize", () => {
      this.positionVideo();
    });
  }

  windowOrientationChange() {
    window.addEventListener("orientationchange", () => {
      this.positionVideo();
    });
  }

  positionVideo() {
    this.video.width = this.el.offsetWidth;
    this.video.height = this.el.offsetHeight;
    this.container.width = (<HTMLElement>this.el.parentNode).offsetWidth;
    this.container.height = (<HTMLElement>this.el.parentNode).offsetHeight;

    this.video.ratio = this.video.width / this.video.height;
    this.container.ratio = this.container.width / this.container.height;

    if (this.container.ratio > this.video.ratio) {
      const videoMarginTop = Math.ceil(
        (this.video.height - this.container.height) / 2
      );

      this.el.style.width = "";
      this.el.style.marginTop = `-${videoMarginTop}px`;
      this.el.style.marginLeft = "";
    } else {
      const videoWidth = Math.ceil(this.container.height * this.video.ratio);
      const videoMarginLeft = Math.ceil(
        (videoWidth - this.container.width) / 2
      );

      this.el.style.width = `${videoWidth}px`;
      this.el.style.marginTop = "";
      this.el.style.marginLeft = `-${videoMarginLeft}px`;
    }
  }
}
