const tables: NodeList = document.querySelectorAll("table");

if (tables.length) {
  for (let i = 0; i < tables.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("table-overflow");
    tables[i].parentNode.insertBefore(wrapper, tables[i]);
    wrapper.appendChild(tables[i]);
  }
}
