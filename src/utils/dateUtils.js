import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const DATE_FORMAT = {
  monthDay: 'MMM DD',
  hoursMins: 'HH:MM',
};

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
}

export { humanizeDateMonthDay, humanizeDateHourMin, humanizeDiffTime };
