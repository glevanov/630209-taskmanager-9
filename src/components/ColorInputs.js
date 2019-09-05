import {createElement} from '../util';

/**
 * Color input component
 * @class
 */
export default class RepeatDays {
  /**
   * @param {object} props
   */
  constructor(props) {
    this._element = null;
    this._color = props.color;
    this._checkedColor = props.checkedColor;
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

  /** Removes link to element */
  removeElement() {
    this._element = null;
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
