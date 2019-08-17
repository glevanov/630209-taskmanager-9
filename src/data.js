import {getRandomBoolean} from './mockHelpers';

export const getTask = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * (getRandomBoolean()) ? 7 : -7),
  repeatingDays: {
    'Mo': getRandomBoolean(),
    'Tu': getRandomBoolean(),
    'We': getRandomBoolean(),
    'Th': getRandomBoolean(),
    'Fr': getRandomBoolean(),
    'Sa': getRandomBoolean(),
    'Su': getRandomBoolean(),
  },
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
  ]),
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: getRandomBoolean(),
  isArchive: getRandomBoolean(),
});
