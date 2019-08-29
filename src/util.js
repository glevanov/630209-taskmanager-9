/**
 * Enum for element insertion position
 * @readonly
 * @enum {string}
 */
const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

/**
 * Creates element from markup template
 * @param {string} template
 * @return {Node}
 */
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

/**
 * Renders element inside the target container
 * @param {Node} container
 * @param {Node} element
 * @param {string} place
 */
export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

/**
 * Unrenders element
 * @param {Node} element
 */
export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};
