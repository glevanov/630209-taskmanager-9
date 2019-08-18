import {getMenu} from './components/Menu';
import {getSearch} from './components/Search';
import {getFilters} from './components/Filter';
import {getBoard} from './components/Board';
import {filters, tasks} from './data';

/**
 * Renders markup inside the target container
 * @param {Node} container
 * @param {string} markup
 */
const render = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

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
};

const mainElement = document.querySelector(`.main`);

renderAll(mainElement);
