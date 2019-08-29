import RepeatDays from './RepeatDays';
import ColorInputs from './ColorInputs';

/**
 * Returns Task form element markup
 * @param {object} task object
 * @return {string} element markup
 */
export const getTaskForm = ({
  description,
  dueDate,
  repeatingDays,
  tags,
  color,
  isFavorite,
  isArchived
}) => {
  const days = new Set([
    `Mo`,
    `Tu`,
    `We`,
    `Th`,
    `Fr`,
    `Sa`,
    `Su`,
  ]);

  const inputColors = new Set([
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ]);
  const parsedDate = new Date(dueDate);
  const formattedDate = `${parsedDate.getDate()} ${parsedDate.toLocaleString(`en-US`, {month: `long`})}`;
  const isRepeating = Object.values(repeatingDays).includes(true);

  const dayInputs = Array.from(days).map((item) => getRepeatDays(item, repeatingDays));
  const colorInputs = Array.from(inputColors).map((item) => getColorInputs(item, color));

  return `
  <article class="card card--edit card--${color}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--archive ${(isArchived) ? `` : `card__btn--disabled`}">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites ${(isFavorite) ? `` : `card__btn--disabled`}"
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
            >${description}</textarea>
          </label>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${(parsedDate) ? `` : `no`}</span>
              </button>
              <fieldset class="card__date-deadline" ${(parsedDate) ? `` : `disabled`}>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                    value="${formattedDate}"
                  />
                </label>
              </fieldset>
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">${(isRepeating) ? `` : `no`}</span>
              </button>
              <fieldset class="card__repeat-days" ${(isRepeating) ? `` : `disabled`}>
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
                  value="${(tags) ? `#${Array.from(tags).join(` #`)}` : ``}"
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
