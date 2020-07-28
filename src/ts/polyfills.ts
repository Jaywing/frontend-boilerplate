import Promise from "es6-promise";

// Promise fallback
if (!window.Promise) {
  window.Promise = Promise;
}

// forEach fallback
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
