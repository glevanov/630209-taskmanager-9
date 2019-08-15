/**
 * Returns random integer
 * @param {number} min Minimum integer
 * @param {number} max Maximum integer
 * @return {number}
 */
export default (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
