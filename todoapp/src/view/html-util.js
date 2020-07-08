/**
 * @param {string} str
 * @return {string}
 */
export const escapeSpecialChars = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * @param {string} html
 * @return {Element}
 */
export const htmlToElement = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstElementChild;
};

/**
 * @param {tag template literal}
 * @return {Element}
 */
export const element = (strings, ...values) => {
  const htmlString = strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
  return htmlToElement(htmlString);
};

/**
 * @param {Element} bodyElement
 * @param {Element} containerElement
 * @return {Element}
 */
export const render = (bodyElement, containerElement) => {
  containerElement.innerHTML = "";
  containerElement.appendChild(bodyElement);
};
