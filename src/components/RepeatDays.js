import {createElement} from '../util';

/**
 * Repeat Days component
 * @class
 */
export default class RepeatDays {
  /**
   * @param {object} props
   * @param {string} props.day Day name
   * @param {object} props.repeatingDays Repeating days data
   */
  constructor({
    day,
    repeatingDays,
  }) {
    this._element = null;
    this._day = day;
    this._repeatingDays = repeatingDays;
  }

  /**
   * Returns formatted day
   * @return {string}
   */
  get _formattedDay() {
    return this._day.toLowerCase();
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
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${this._formattedDay}-1"
      name="repeat"
      value="${this._formattedDay}"
      ${(this._repeatingDays[this._day]) ? `checked` : ``}
    />
    <label class="card__repeat-day" for="repeat-${this._formattedDay}-1">
      ${this._formattedDay}
    </label>`;
  }
}
