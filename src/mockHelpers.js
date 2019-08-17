/**
 * Returns random integer
 * @param {number} min Minimum integer
 * @param {number} max Maximum integer
 * @return {number}
 */
export const getRandomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

/**
 * Returns random boolean
 * @return {boolean}
 */
export const getRandomBoolean = () => Boolean(Math.round(Math.random()));
