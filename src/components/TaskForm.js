import {createElement} from '../util';
import RepeatDays from './RepeatDays';
import ColorInputs from './ColorInputs';

/**
 * Task form component
 * @class
 */
export default class TaskForm {
  /**
   * @param {object} props
   * @param {string} props.description Task description
   * @param {number} props.dueDate Task due date
   * @param {object} props.repeatingDays Task repeat days
   * @param {Set} props.tags Task tags
   * @param {string} props.color Task color
   * @param {boolean} props.isFavorite Task favorite flag
   * @param {boolean} props.isArchived Task archived flag
   */
  constructor({
    description,
    dueDate,
    repeatingDays,
    tags,
    color,
    isFavorite,
    isArchived
  }) {
    this._element = null;
    this._description = description;
    this._dueDate = dueDate;
    this._repeatingDays = repeatingDays;
    this._tags = tags;
    this._color = color;
    this._isFavorite = isFavorite;
    this._isArchived = isArchived;
    this._days = new Set([
      `Mo`,
      `Tu`,
      `We`,
      `Th`,
      `Fr`,
      `Sa`,
      `Su`,
    ]);
    this._inputColors = new Set([
      `black`,
      `yellow`,
      `blue`,
      `green`,
      `pink`,
    ]);
    this._isRepeating = Object.values(repeatingDays).includes(true);
  }

  /**
   * Returns date as Date object
   * @return {object}
   */
  get _parsedDate() {
    return new Date(this._dueDate);
  }

  /**
   * Returns formatted date
   * @return {string}
   */
  get formattedDate() {
    return `${this._parsedDate.getDate()} ${this._parsedDate.toLocaleString(`en-US`, {month: `long`})}`;
  }

  /**
   * Returns Repeat Days input markup
   * @param {object} props
   * @return {string}
   */
  _getRepeatDays(props) {
    const input = new RepeatDays(props);
    return input.getTemplate();
  }

  /**
   * Returns Repeat Days inputs markup
   * @return {array}
   */
  _getRepeatDaysMarkup() {
    const repeatingDays = this._repeatingDays;
    return Array.from(this._days)
      .map((item) => this._getColorInput({item, repeatingDays}));
  }

  /**
   * Returns Color Input markup
   * @param {object} props
   * @return {string}
   */
  _getColorInput(props) {
    const input = new ColorInputs(props);
    return input.getTemplate();
  }

  /**
   * Returns Color Inputs markup
   * @return {array}
   */
  _getColorInputsMarkup() {
    return Array.from(this._inputColors)
      .map((item) => this._getColorInput({color: item}));
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
    <article class="card card--edit card--${this._color}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--archive ${(this._isArchived) ? `` : `card__btn--disabled`}">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites ${(this._isFavorite) ? `` : `card__btn--disabled`}"
          >
            favorites
          </button>
        </div>
        <div class="card__color-bar">
          <svg width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${this._description}</textarea>
          </label>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${(this._parsedDate) ? `` : `no`}</span>
              </button>
              <fieldset class="card__date-deadline" ${(this._parsedDate) ? `` : `disabled`}>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                    value="${this._formattedDate}"
                  />
                </label>
              </fieldset>
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">${(this._isRepeating) ? `` : `no`}</span>
              </button>
              <fieldset class="card__repeat-days" ${(this._isRepeating) ? `` : `disabled`}>
                <div class="card__repeat-days-inner">
                  ${this._getRepeatDaysMarkup().join(``)}
                </div>
              </fieldset>
            </div>
            <div class="card__hashtag">
              <div class="card__hashtag-list"></div>
              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                  value="${(this._tags) ? `#${Array.from(this._tags).join(` #`)}` : ``}"
                />
              </label>
            </div>
          </div>
          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              ${this._getColorInputsMarkup().join(``)}
            </div>
          </div>
        </div>
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
  }
}
