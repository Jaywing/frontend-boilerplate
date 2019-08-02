const jsElements = document.querySelectorAll("[data-js]");

for (let i = 0; i < jsElements.length; i++) {
  const el = jsElements[i];

  let jsElementFunctions = el.getAttribute("data-js");
  jsElementFunctions = jsElementFunctions.split(" ").map(function(item) {
    return item.trim(jsElementFunctions);
  });

  let options = {};
  const dataOptions = el.getAttribute(`data-js-options`);

  if (dataOptions) {
    options = JSON.parse(dataOptions);
  }

  for (let i = 0; i < jsElementFunctions.length; i++) {
    window[jsElementFunctions[i]](el, options[i]);
  }
}
