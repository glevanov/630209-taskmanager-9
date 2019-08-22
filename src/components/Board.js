import {getTaskCard} from './TaskCard';
import {getTaskForm} from './TaskForm';
import {tasks as tasksData} from '../data';
import render from '../render';

/**
 * Max number of tasks to display per render
 * @constant
 * @type {number}
 */
const MAX_TASKS_PER_BOARD = 8;

/**
 * Returns Board element markup
 * @param {array} tasks array
 * @return {string} element markup
 */
export const getBoard = (tasks) => {
  const taskCards = tasks.slice(1, MAX_TASKS_PER_BOARD).map(getTaskCard);

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
    ${(tasks.length <= MAX_TASKS_PER_BOARD) ? `` : `<button class="load-more" type="button">load more</button>`}
   </section>`;
};

/**
 * Removes load more button & handler
 */
const removeLoadMore = () => {
  const board = document.querySelector(`.board`);
  const loadMore = board.querySelector(`.load-more`);

  loadMore.removeEventListener(`click`, handleLoadMoreClick);
  board.removeChild(loadMore);
};

/**
 * Handles load more button click
 */
const handleLoadMoreClick = () => {
  const tasksBoard = document.querySelector(`.board__tasks`);

  taskIndexCounter++;
  const currentIndex = taskIndexCounter * MAX_TASKS_PER_BOARD;
  const tasksToRender = tasksData.slice(currentIndex, currentIndex + MAX_TASKS_PER_BOARD);

  if (tasksToRender.length) {
    if (currentIndex <= tasksData.length - 1) {
      removeLoadMore();
    }
    render(tasksBoard, `${tasksToRender.map(getTaskCard).join(``)}`);
  } else {
    removeLoadMore();
  }
};

/**
 * Adds Load more button event handlers
 */
export const addLoadMoreEventListener = () => {
  const loadMore = document.querySelector(`.load-more`);
  if (loadMore) {
    loadMore.addEventListener(`click`, handleLoadMoreClick);
  }
};

/**
 * Counter for number of Load More button clicks
 * @type {number}
 */
let taskIndexCounter = 0;
