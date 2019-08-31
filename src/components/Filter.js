import {createElement} from '../util';

/**
 * Filter component
 * @class
 */
export default class Filter {
  /**
   * @param {object} props
   * @param {array} props.filters Filters data
   */
  constructor({filters}) {
    this._filters = filters;
    this._element = null;
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
   * Returns filters markup
   * @return {string}
   */
  _getFilters() {
    return this._filters.map(({title, checked, disabled, count}) => `
      <input type="radio" id="filter__${title.toLocaleLowerCase()}" class="filter__input visually-hidden" name="filter" ${(checked) ? `checked` : ``} ${(disabled) ? `disabled` : ``}>
      <label for="filter__${title.toLocaleLowerCase()}" class="filter__label">${title} <span class="filter__all-count">${count}</span></label>
    `);
  }

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    <section class="main__filter filter container">
      ${this._getFilters().join(``)}
    </section>`;
  }
}
