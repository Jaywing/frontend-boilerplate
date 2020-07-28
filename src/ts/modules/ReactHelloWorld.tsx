import dataJsModule from "./extendables/dataJsModule";

import React from "react";
import ReactDOM from "react-dom";
import HelloWorldApp from "./react/HelloWorld/HelloWorldApp";

export default class Calculator extends dataJsModule {
  init() {
    ReactDOM.render(<HelloWorldApp />, this.el);
  }
}
