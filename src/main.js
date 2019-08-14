'use strict';

/**
 * Returns Menu element markup
 * @return {string} element markup
 */
const getMenu = () => `
  <section class="control__btn-wrap">
    <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden">
    <label for="control__new-task" class="control__label control__label--new-task">+ ADD NEW TASK</label>
    <input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked="">
    <label for="control__task" class="control__label">TASKS</label>
    <input type="radio" name="control" id="control__statistic" class="control__input visually-hidden">
    <label for="control__statistic" class="control__label">STATISTICS</label>
  </section>`;

/**
 * Returns Search element markup
 * @return {string} element markup
 */
const getSearch = () => `
  <section class="main__search search container">
    <input type="text" id="search__input" class="search__input" placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE">
    <label class="visually-hidden" for="search__input">Search</label>
   </section>`;

/**
 * Returns random integer
 * @param {number} min Minimum integer
 * @param {number} max Maximum integer
 * @return {number}
 */
const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};


/**
 * Returns Filters element markup
 * @return {string} element markup
 */
const getFilters = () => {
  const filtersData = [
    {
      label: `All`,
      checked: true,
      disabled: false,
    },
    {
      label: `Overdue`,
      checked: false,
      disabled: true,
    },
    {
      label: `Today`,
      checked: false,
      disabled: true,
    },
    {
      label: `Favorites`,
      checked: false,
      disabled: true,
    },
    {
      label: `Repeating`,
      checked: false,
      disabled: true,
    },
    {
      label: `Tags`,
      checked: false,
      disabled: true,
    },
    {
      label: `Archive`,
      checked: false,
      disabled: false,
    },
  ];

  const filterElements = filtersData.map((item) => `
  <input type="radio" id="filter__${item.label.toLocaleLowerCase()}" class="filter__input visually-hidden" name="filter" ${(item.checked) ? `checked` : ``} ${(item.disabled) ? `disabled` : ``}>
    <label for="filter__${item.label.toLocaleLowerCase()}" class="filter__label">${item.label} <span class="filter__all-count">${randomInteger(0, 150)}</span></label>
  `);

  return `
  <section class="main__filter filter container">
    ${filterElements.join(``)}
  </section>`;
};

/**
 * Returns Board element markup
 * @return {string} element markup
 */
const getBoard = () => {
  const taskCards = Array(3).fill(getTaskCard());

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

/**
 * Returns Task card element markup
 * @return {string} element markup
 */
const getTaskCard = () => `
  <article class="card card--blue">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <p class="card__text">Example default task with custom color.</p>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">23 September</span>
                  <span class="card__time">11:15 PM</span>
                </p>
              </div>
            </div>
            <div class="card__hashtag">
              <div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #todo
                  </span>
                </span>
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #personal
                  </span>
                </span>
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #important
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;

/**
 * Returns Repeat Days element markup
 * @param {object} day object
 * @return {string} element markup
 */
const getRepeatDays = (day) => `
  <input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-${day.code}-1"
    name="repeat"
    value="${day.code}"
    ${(day.checked) ? `checked` : ``}
  />
  <label class="card__repeat-day" for="repeat-${day.code}-1"
    >${day.code}</label>`;

/**
 * Returns Color input element markup
 * @param {object} color object
 * @return {string} element markup
 */
const getColorInputs = (color) => `
  <input
    type="radio"
    id="color-${color.color}-1"
    class="card__color-input card__color-input--${color.color} visually-hidden"
    name="color"
    value="${color.color}"
    ${(color.checked) ? `checked` : ``}
  />
  <label
    for="color-${color.color}-1"
    class="card__color card__color--${color.color}"
    >${color.color}</label
  >`;

/**
 * Returns Task form element markup
 * @return {string} element markup
 */
const getTaskForm = () => {
  const days = [
    {
      code: `mo`,
      checked: false,
    },
    {
      code: `tu`,
      checked: true,
    },
    {
      code: `we`,
      checked: false,
    },
    {
      code: `th`,
      checked: false,
    },
    {
      code: `fr`,
      checked: true,
    },
    {
      code: `sa`,
      checked: false,
    },
    {
      code: `su`,
      checked: true,
    },
  ];

  const colors = [
    {
      color: `black`,
      checked: true,
    },
    {
      color: `yellow`,
      checked: false,
    },
    {
      color: `blue`,
      checked: false,
    },
    {
      color: `green`,
      checked: false,
    },
    {
      color: `pink`,
      checked: false,
    },
  ];

  const dayInputs = days.map((day) => getRepeatDays(day));
  const colorInputs = colors.map((color) => getColorInputs(color));

  return `
  <article class="card card--edit card--black">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>
        <div class="card__color-bar">
          <svg width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >This is example of new task, you can add picture, set date and time, add tags.</textarea>
          </label>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">no</span>
              </button>
              <fieldset class="card__date-deadline" disabled>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                  />
                </label>
              </fieldset>
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">no</span>
              </button>
              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  ${dayInputs.join(``)}
                </div>
              </fieldset>
            </div>
            <div class="card__hashtag">
              <div class="card__hashtag-list"></div>
              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>
          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              ${colorInputs.join(``)}
            </div>
          </div>
        </div>
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
};

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
    ${getFilters()}
    ${getBoard()}
  `);
};

const mainElement = document.querySelector(`.main`);

renderAll(mainElement);
