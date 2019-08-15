/**
 * Returns Repeat Days element markup
 * @param {object} day object
 * @return {string} element markup
 */
export const getRepeatDays = (day) => `
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
