import { DateTime } from './luxon.js';

const date = document.querySelector('.date');

const now = DateTime.local(); // eslint-disable-line no-undef

const datetime = now.toLocaleString({
  locale: 'en-US',
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  month: 'long',
});
const time = now.toLocaleString({
  locale: 'en-US',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
});

date.innerHTML = `${datetime}, ${time}`;
