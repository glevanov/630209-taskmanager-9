/**
 * Returns Color input element markup
 * @param {object} color object
 * @return {string} element markup
 */
export const getColorInputs = (color) => `
  <input
    type="radio"
    id="color-${color.color}-1"
    class="card__color-input card__color-input--${color.color} visually-hidden"
    name="color"
    value="${color.color}"
    ${(color.checked) ? `checked` : ``}
  />
  <label
    for="color-${color.color}-1"
    class="card__color card__color--${color.color}"
    >${color.color}</label
  >`;
