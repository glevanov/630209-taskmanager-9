import {createElement} from '../util';

/**
 * Board component
 * @class
 */
export default class Board {
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
    <section class="board container">
    <div class="board__tasks"></div>
   </section>`;
  }
}
