import {render, Position} from './util';
import Board from './components/Board';
import Filter from './components/Filter';
import Menu from './components/Menu';
import Search from './components/Search';
import SortControls from './components/SortControls';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import {filters, tasks} from './data';

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

const mainElement = document.querySelector(`.main`);

const menu = new Menu();
const search = new Search();
const filter = new Filter({filters});
const board = new Board();
const sortControls = new SortControls();

renderScaffolding(mainElement);
