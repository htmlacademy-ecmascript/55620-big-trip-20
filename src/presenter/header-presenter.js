import {RenderPosition, render} from '../framework/render';
import FilterMenu from '../view/filteres';
import SortMenu from '../view/sorting';
import { generateFilter } from '../utils/filterUtils';

export default class HeaderPresenter {
  #filterData;
  #filterBox;
  #sortBox;
  // #filterMenu = new FilterMenu();
  #sortMenu = new SortMenu();

  constructor({ filterContainer, tripSortContainer, pointData}) {
    this.#filterBox = filterContainer;
    this.#sortBox = tripSortContainer;
    this.#filterData = pointData;
  }

  init() {
    const filterData = generateFilter(this.#filterData);
    render(new FilterMenu({filterData}), this.#filterBox, RenderPosition.AFTERBEGIN);
    render(this.#sortMenu, this.#sortBox, RenderPosition.AFTERBEGIN);
  }
}
