import {getRandomBoolean, getRandomInteger} from './mockHelpers';

export const getTask = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * ((getRandomBoolean()) ? 7 : -7)) * 24 * 60 * 60 * 1000,
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
  isArchived: getRandomBoolean(),
});

export const tasks = Array(getRandomInteger(4, 13)).fill(``).map(getTask);

export const filters = [
  {
    title: `All`,
    checked: true,
    disabled: false,
    get count() {
      return tasks.length;
    },
  },
  {
    title: `Overdue`,
    checked: false,
    disabled: true,
    get count() {
      return tasks.reduce((acc, task) => {
        if (new Date(task.dueDate) < new Date()) {
          acc++;
        }
        return acc;
      }, 0);
    },
  },
  {
    title: `Today`,
    checked: false,
    disabled: true,
    get count() {
      return tasks.reduce((acc, task) => {
        if (new Date(task.dueDate).toDateString() === new Date().toDateString()) {
          acc++;
        }
        return acc;
      }, 0);
    },
  },
  {
    title: `Favorites`,
    checked: false,
    disabled: true,
    get count() {
      return tasks.reduce((acc, task) => {
        if (task.isFavorite) {
          acc++;
        }
        return acc;
      }, 0);
    },
  },
  {
    title: `Repeating`,
    checked: false,
    disabled: true,
    get count() {
      return tasks.reduce((acc, task) => {
        if (Object.values(task.repeatingDays).some((value) => value === true)) {
          acc++;
        }
        return acc;
      }, 0);
    },
  },
  {
    title: `Tags`,
    checked: false,
    disabled: true,
    get count() {
      return tasks.reduce((acc, task) => {
        if (task.tags.size) {
          acc++;
        }
        return acc;
      }, 0);
    },
  },
  {
    title: `Archive`,
    checked: false,
    disabled: false,
    get count() {
      return tasks.reduce((acc, task) => {
        if (task.isArchived) {
          acc++;
        }
        return acc;
      }, 0);
    },
  },
];
