import dataJsModule from "./extendables/dataJsModule";

export default class Sort extends dataJsModule {
  options: {
    targetFormID: string;
  };
  form: HTMLFormElement;

  init() {
    this.onChange();
  }

  onChange() {
    this.form = document.querySelector("#" + this.options.targetFormID);

    if (this.form) {
      this.el.addEventListener("change", (e) => {
        this.form.submit();
      });
    }
  }
}
