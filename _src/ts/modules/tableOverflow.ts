import dataJsModule from "./extendables/dataJsModule";

export default class TableOverflow extends dataJsModule {
  tables: NodeList;

  init() {
    this.tables = document.querySelectorAll("table");

    if (this.tables.length) {
      for (let i = 0; i < this.tables.length; i++) {
        const table = this.tables[i];
        const wrapper = document.createElement("div");
        wrapper.classList.add("table-overflow");
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    }
  }
}
