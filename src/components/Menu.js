import {createElement} from '../util';

/**
 * Menu component
 * @class
 */
export default class Menu {
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

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    <section class="control__btn-wrap">
      <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden">
      <label for="control__new-task" class="control__label control__label--new-task">+ ADD NEW TASK</label>
      <input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked="">
      <label for="control__task" class="control__label">TASKS</label>
      <input type="radio" name="control" id="control__statistic" class="control__input visually-hidden">
      <label for="control__statistic" class="control__label">STATISTICS</label>
    </section>`;
  }
}
