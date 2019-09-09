import {render, removeElement, Position} from './util';
import Board from './components/Board';
import LoadMore from './components/LoadMore';
import Filter from './components/Filter';
import Menu from './components/Menu';
import Search from './components/Search';
import SortControls from './components/SortControls';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import {filters, tasks} from './data';

/**
 * Max number of tasks to display per render
 * @constant
 * @type {number}
 */
const MAX_TASKS_PER_BOARD = 8;

/**
 * Renders all page elements
 * @param {Node} mainElement Target for markup injection
 */
const renderScaffolding = (mainElement) => {
  render(mainElement.querySelector(`.main__control`), menu.getElement());
  render(mainElement, search.getElement());
  render(mainElement, filter.getElement());
  render(mainElement, board.getElement());
  render(mainElement.querySelector(`.board`), sortControls.getElement(), Position.AFTERBEGIN);
};

/**
 * Renders a task
 * @param {object} taskMock Task data
 */
const renderTask = (taskMock) => {
  const task = new TaskCard(taskMock);
  const taskEdit = new TaskForm(taskMock);
  const handleEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tasksBoard.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, handleEscKeyDown);
      hasTaskFormOpen = false;
    }
  };

  task.getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      if (!hasTaskFormOpen) {
        tasksBoard.replaceChild(taskEdit.getElement(), task.getElement());
        document.addEventListener(`keydown`, handleEscKeyDown);
      }
      hasTaskFormOpen = true;
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, handleEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, handleEscKeyDown);
    });

  taskEdit.getElement()
    .querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      tasksBoard.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, handleEscKeyDown);
      hasTaskFormOpen = false;
    });

  render(tasksBoard, task.getElement());
};

/**
 * Removes load more button & handler
 */
const removeLoadMore = () => {
  loadMore.getElement().removeEventListener(`click`, handleLoadMoreClick);
  removeElement(loadMore.getElement());
};

/**
 * Handles load more button click
 */
const handleLoadMoreClick = () => {
  taskIndexCounter++;
  const currentIndex = taskIndexCounter * MAX_TASKS_PER_BOARD;
  const tasksToRender = tasks.slice(currentIndex, currentIndex + MAX_TASKS_PER_BOARD);

  if (tasksToRender.length) {
    if (tasksToRender.length < MAX_TASKS_PER_BOARD) {
      removeLoadMore();
    }
    tasksToRender.forEach((task) => {
      renderTask(task);
    });
  } else {
    removeLoadMore();
  }
};

/**
 * Adds Load more button event handlers
 */
export const addLoadMoreEventListener = () => {
  if (loadMore.getElement()) {
    loadMore.getElement().addEventListener(`click`, handleLoadMoreClick);
  }
};

const mainElement = document.querySelector(`.main`);

const menu = new Menu();
const search = new Search();
const filter = new Filter({filters});
const board = new Board();
const loadMore = new LoadMore();
const sortControls = new SortControls();

/**
 * Counter for number of Load More button clicks
 * @type {number}
 */
let taskIndexCounter = 0;

/**
 * TaskForm state flag
 * @type {boolean}
 */
let hasTaskFormOpen = false;

renderScaffolding(mainElement);
const tasksBoard = mainElement.querySelector(`.board__tasks`);
tasks.slice(0, MAX_TASKS_PER_BOARD).forEach((task) => {
  renderTask(task);
});
if (tasks.length > MAX_TASKS_PER_BOARD) {
  render(mainElement.querySelector(`.board`), loadMore.getElement());
  addLoadMoreEventListener();
}
