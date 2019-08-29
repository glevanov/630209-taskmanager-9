import {getRandomInteger} from '../mockHelpers';
import {createElement} from '../util';

/**
 * Task card component
 * @class
 */
export default class Search {
  /**
   * @param {object} props
   * @param {string} props.description Color name
   * @param {number} props.dueDate Checked color name
   * @param {object} props.repeatingDays Checked color name
   * @param {Set} props.tags Checked color name
   * @param {string} props.color Checked color name
   * @param {boolean} props.isFavorite Checked color name
   * @param {boolean} props.isArchived Checked color name
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
  }

  get _parsedDate() {
    return new Date(this._dueDate);
  }

  _getTagElements(tags) {
    return Array.from(tags).slice(0, getRandomInteger(0, 3)).map((tag) => `
    <span class="card__hashtag-inner">
      <span class="card__hashtag-name">
        #${tag}
      </span>
    </span>
    `);
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
    <article class="card card--${this._color} ${Object.keys(this._repeatingDays).some((day) => this._repeatingDays[day]) ? `card--repeat` : ``}">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
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
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <p class="card__text">${this._description}</p>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${this._parsedDate.getDate()} ${this._parsedDate.toLocaleString(`en-US`, {month: `long`})}</span>
                  <span class="card__time">${this._parsedDate.toLocaleString(`en-US`, {hour: `numeric`, minute: `numeric`, hour12: true})}</span>
                </p>
              </div>
            </div>
            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${this._getTagElements(this._tags).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;
  }
}
