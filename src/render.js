/**
 * Renders markup inside the target container
 * @param {Node} container
 * @param {string} markup
 */
export default (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};
