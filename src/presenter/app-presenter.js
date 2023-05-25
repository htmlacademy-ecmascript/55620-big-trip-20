import { render, RenderPosition, } from '../framework/render';
import { SortType, sortByTime, sortByPrice } from '../utils/filterUtils';
//sorting
import SortMenu from '../view/sorting';
//ul
import EventsList from '../view/events-list';
//Шаблон для пустого листа
import EmptyList from '../view/events-empty-list';
//Презентер точки маршрута
import PointPresenter from './point-presenter';
//Функция поиска
import { updateItem } from '../utils/commonUtils';


export default class AppPresenter {
  #pointsContainer = null;
  #pointsModel = null;
  #appComponent = new EventsList();
  #destinations = null;
  #offers = null;
  #points = [];
  #pointsPresenters = new Map();
  #sortComponent = null;
  #currentSortType = SortType.DAY;
  #defaultSortPoint = [];

  constructor({ pointsContainer, pointModel}) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointsModel.getPoints()];
    this.#destinations = this.#pointsModel.getDestinations();
    this.#offers = this.#pointsModel.getOffers();
    // 1. В отличии от сортировки по любому параметру,
    // исходный порядок можно сохранить только одним способом -
    // сохранив исходный массив:
    this.#defaultSortPoint = [...this.#pointsModel.getPoints()];
    //отрисовка доски
    this.#renderBoard();
    this.#renderSort();
  }

  #renderBoard() {
    render(this.#appComponent, this.#pointsContainer);
    if (!this.#points.length) {
      this.#renderEmptyList();
    }

    for (let i = 0; i < this.#points.length; i++){
      this.#renderPoint(this.#points[i], this.#destinations, this.#offers);
    }

    // this.#renderSort();
    // console.log('tripSortContainer = ', this.#pointsContainer);
  }

  #renderPoint(point, destinations, offers) {
    const pointPresenter = new PointPresenter({
      pointContainer: this.#appComponent,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, destinations, offers);
    this.#pointsPresenters.set(point.id, pointPresenter);
    // console.log(this.#pointsPresenters);
  }

  #handlePointChange = (updatePoint) => {
    this.#points = updateItem(this.#points, updatePoint);
    this.#defaultSortPoint = updateItem(this.#defaultSortPoint, updatePoint);
    this.#pointsPresenters.get(updatePoint.id).init(updatePoint, this.#destinations, this.#offers);
  };

  #handleModeChange = () => {
    this.#pointsPresenters.forEach((presenter) => presenter.resetView());
  };

  #clearPointList() {
    this.#pointsPresenters.forEach((presenter) => presenter.destroy());
    this.#pointsPresenters.clear();
  }

  #renderEmptyList() {
    render(new EmptyList(), this.#appComponent.element);
  }

  #sortPoint(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#points = [...sortByTime(this.#points)];
        break;
      case SortType.PRICE:
        this.#points = [...sortByPrice(this.#points)];
        break;
      default:
        this.#points = [...this.#defaultSortPoint];
    }
    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    // - Сортируем задачи
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoint(sortType);
    // - Очищаем список
    this.#clearPointList();
    // - Рендерим список заново
    this.#renderBoard();
  };

  #renderSort() {
    this.#sortComponent = new SortMenu({
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#pointsContainer, RenderPosition.AFTERBEGIN);
  }
}
