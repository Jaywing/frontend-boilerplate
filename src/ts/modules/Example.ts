export default function Example(el: HTMLElement) {
  this.el = el;

  this.init = () => {
    console.log(this.el);
  }
}
