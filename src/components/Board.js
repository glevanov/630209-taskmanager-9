import {getTaskCard} from './TaskCard';

/**
 * Returns Board element markup
 * @param {array} tasks array
 * @return {string} element markup
 */
export const getBoard = (tasks) => {
  const taskCards = tasks.map(getTaskCard);

  return `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks">
      ${taskCards.join(``)}
    </div>
    <button class="load-more" type="button">load more</button>
   </section>`;
};
