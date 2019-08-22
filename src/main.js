import {getMenu} from './components/Menu';
import {getSearch} from './components/Search';
import {getFilters} from './components/Filter';
import {getBoard, addLoadMoreEventListener} from './components/Board';
import {filters, tasks} from './data';
import render from './render';

/**
 * Renders all page elements
 * @param {Node} mainElement Target for markup injection
 */
const renderAll = (mainElement) => {
  render(mainElement.querySelector(`.main__control`), getMenu());
  render(mainElement, `
    ${getSearch()}
    ${getFilters(filters)}
    ${getBoard(tasks)}
  `);
  addLoadMoreEventListener();
};

const mainElement = document.querySelector(`.main`);

renderAll(mainElement);
