import {createElement} from '../util';

/**
 * Load More button component
 * @class
 */
export default class LoadMore {
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
    <button class="load-more" type="button">
      load more
    </button>`;
  }
}
