import AbstractView from '../framework/view/abstract-view';
import {capitalize } from '../utils/commonUtils';


const createFilterItem = (filterData, isChecked) => {
  // console.log(filterData, isChecked)
  const { type, count } = filterData;
  return `<div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${isChecked ? 'checked' : ''} ${count || 'disabled'}>
    <label class="trip-filters__filter-label" for="filter-${type}">${capitalize(type)}</label>
  </div>`;
};

function createFilterMenu(filterData) {
  const createFilterList = filterData.map((item, index) => createFilterItem(item, index === 0)).join('');

  return `<form class="trip-filters" action="#" method="get">
${createFilterList}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}

export default class FilterMenu extends AbstractView {
  #filterData = null;
  constructor({filterData}) {
    super();
    this.#filterData = filterData;
  }

  get template() {
    return createFilterMenu(this.#filterData);
  }

}
