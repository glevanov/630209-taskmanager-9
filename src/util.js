/**
 * Enum for element insertion position
 * @readonly
 * @enum {string}
 */
export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

/**
 * Creates element from markup template
 * @param {string} template
 * @return {Node}
 */
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template.trim();
  return newElement.firstChild;
};

/**
 * Removes element from DOM
 * @param {Node} element
 * @return {boolean}
 */
export const removeElement = (element) => (element) && element.remove();

/**
 * Renders element inside the target container
 * @param {Node} container
 * @param {Node} element
 * @param {string} place
 */
export const render = (container, element, place = Position.BEFOREEND) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};
