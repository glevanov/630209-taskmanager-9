import {getTaskCard} from './TaskCard';
import {getTaskForm} from './TaskForm';

/**
 * Returns Board element markup
 * @param {array} tasks array
 * @return {string} element markup
 */
export const getBoard = (tasks) => {
  const taskCards = tasks.slice(1).map(getTaskCard);

  return `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks">
      ${getTaskForm(tasks[0])}
      ${taskCards.join(``)}
    </div>
    <button class="load-more" type="button">load more</button>
   </section>`;
};
