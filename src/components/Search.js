import {createElement} from '../util';

/**
 * Search component
 * @class
 */
export default class Search {
  constructor() {
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
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    <section class="main__search search container">
      <input type="text" id="search__input" class="search__input" placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE">
      <label class="visually-hidden" for="search__input">Search</label>
    </section>`
      .trim();
  }
}
