import {createElement} from '../util';

/**
 * Color input component
 * @class
 */
export default class RepeatDays {
  /**
   * @param {object} props
   * @param {string} props.color Color name
   * @param {object} props.checkedColor Checked color name
   */
  constructor({
    color,
    checkedColor,
  }) {
    this._element = null;
    this._color = color;
    this._checkedColor = checkedColor;
  }

  /**
   * Returns component node
   * @return {Node}
   */
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    <input
      type="radio"
      id="color-${this._color}-1"
      class="card__color-input card__color-input--${this._color} visually-hidden"
      name="color"
      value="${this._color}"
      ${(this._checkedColor === this._color) ? `checked` : ``}
    />
    <label
      for="color-${this._color}-1"
      class="card__color card__color--${this._color}"
      >${this._color}</label
    >`;
  }
}
