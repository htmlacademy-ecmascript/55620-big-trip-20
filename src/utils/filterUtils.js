import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};


function isFuture(date) {
  return dayjs().isBefore(dayjs(date), 'D');
}

function isPresent(date) {
  return dayjs().isSame(dayjs(date), 'D');
}

function isPast(date) {
  return dayjs().isAfter(dayjs(date), 'D');
}

function sortByDate(dateOne, dateTwo) {
  return dayjs(dateOne).unix() - dayjs(dateTwo).unix();
}

const filter = {
  [FilterType.EVERYTHING]: (points) => points.sort((a, b) => sortByDate(a.dateFrom - b.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((item) => isPast(item.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((item) => isPresent(item.dateFrom)),
  [FilterType.FUTURE]: (points) => points.filter((item) => isFuture(item.dateFrom)),
};

function generateFilter(waypoints) {
  return Object.entries(filter).map(
    ([filterType, filterWaypoints]) => ({
      type: filterType,
      count: filterWaypoints(waypoints).length,
    }),
  );
}

export {generateFilter, filter };
