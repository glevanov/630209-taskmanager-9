/**
 * Returns Repeat Days element markup
 * @param {string} day object
 * @param {object} repeatingDays object
 * @return {string} element markup
 */
export const getRepeatDays = (day, repeatingDays) => {
  const formattedDay = day.toLowerCase();

  return `
  <input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-${formattedDay}-1"
    name="repeat"
    value="${formattedDay}"
    ${(repeatingDays[day]) ? `checked` : ``}
  />
  <label class="card__repeat-day" for="repeat-${formattedDay}-1"
    >${formattedDay}</label>`;
};
