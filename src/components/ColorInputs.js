/**
 * Returns Color input element markup
 * @param {string} color object
 * @param {string} checkedColor
 * @return {string} element markup
 */
export const getColorInputs = (color, checkedColor) => `
  <input
    type="radio"
    id="color-${color}-1"
    class="card__color-input card__color-input--${color} visually-hidden"
    name="color"
    value="${color}"
    ${(checkedColor === color) ? `checked` : ``}
  />
  <label
    for="color-${color}-1"
    class="card__color card__color--${color}"
    >${color}</label
  >`;
