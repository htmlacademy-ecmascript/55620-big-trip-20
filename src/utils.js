import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const DATE_FORMAT = {
  monthDay: 'MMM DD',
  hoursMins: 'HH:MM',
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomeElem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function humanizeDateMonthDay(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT.monthDay) : '';
}
function humanizeDateHourMin(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT.hoursMins) : '';
}

function humanizeDiffTime(startTime, endTime) {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const timeReminds = dayjs.duration(end.diff(start));

  // switch (true) {
  //   case (timeReminds.$ms > MS_IN_DAY):
  //     return timeReminds.format('DD[D] HH[H] MM[M]');
  //   case (timeReminds.$ms >= MS_IN_HOUR):
  //     return timeReminds.format('HH[H] MM[M]');
  //   case (timeReminds.$ms < MS_IN_HOUR):
  //     return timeReminds.format('MM[M]');
  // }
  const { days, hours, minutes } = timeReminds.$d;
  // console.log(timeReminds);
  switch (true) {
    case (days > 0):
      return timeReminds.format('DD[D] HH[H] mm[M]');
    case (hours > 0):
      return timeReminds.format('HH[H] mm[M]');
    case (minutes !== 60):
      return timeReminds.format('mm[M]');
  }
  // return timeReminds.format('DD[D] HH[H] MM[M]');
  // return `${days ? `${ days }D` : ''} ${hours ? `${ hours }H` : ''} ${minutes ? `${ minutes }M` : ''}`;
}

export { getRandomInt, getRandomeElem, humanizeDateMonthDay, humanizeDateHourMin, humanizeDiffTime };
