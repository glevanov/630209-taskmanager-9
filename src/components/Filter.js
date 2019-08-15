import getRandomInteger from '../getRandomInteger';

/**
 * Returns Filters element markup
 * @return {string} element markup
 */
export const getFilters = () => {
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
    <label for="filter__${item.label.toLocaleLowerCase()}" class="filter__label">${item.label} <span class="filter__all-count">${getRandomInteger(0, 150)}</span></label>
  `);

  return `
  <section class="main__filter filter container">
    ${filterElements.join(``)}
  </section>`;
};
