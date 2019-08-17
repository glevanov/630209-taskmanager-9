import {getTaskCard} from './TaskCard';
import {getTaskForm} from './TaskForm';
import {getTask} from '../data';

/**
 * Returns Board element markup
 * @return {string} element markup
 */
export const getBoard = () => {
  const taskCards = Array(3).fill(``).map(getTask).map(getTaskCard);

  return `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks">
      ${getTaskForm()}
      ${taskCards.join(``)}
    </div>
    <button class="load-more" type="button">load more</button>
   </section>`;
};
