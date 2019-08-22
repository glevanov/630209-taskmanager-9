/**
 * Returns Filters element markup
 * @param {array} filters array
 * @return {string} element markup
 */
export const getFilters = (filters) => {
  const filterElements = filters.map(({title, checked, disabled, count}) => `
  <input type="radio" id="filter__${title.toLocaleLowerCase()}" class="filter__input visually-hidden" name="filter" ${(checked) ? `checked` : ``} ${(disabled) ? `disabled` : ``}>
    <label for="filter__${title.toLocaleLowerCase()}" class="filter__label">${title} <span class="filter__all-count">${count}</span></label>
  `);

  return `
  <section class="main__filter filter container">
    ${filterElements.join(``)}
  </section>`;
};
