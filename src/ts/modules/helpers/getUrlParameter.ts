export default function getUrlParameter(param: string) {
  const pageUrl = decodeURIComponent(window.location.search.substring(1));
  const parameters = pageUrl.split("&");

  for (let i = 0; i < parameters.length; i++) {
    const parameterKey = parameters[i].split("=");

    if (parameterKey[0] === param) {
      return parameterKey[1] === undefined ? true : parameterKey[1];
    }
  }
}
