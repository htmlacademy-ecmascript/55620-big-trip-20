import {render} from '../framework/render';
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
  #itemComponent = null;
  #appComponent = new EventsList();
  #destinations = null;
  #offers = null;
  #points = [];
  #pointsPresenters = new Map();

  constructor({ pointsContainer, pointModel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointsModel.getPoints()];
    this.#destinations = this.#pointsModel.getDestinations();
    this.#offers = this.#pointsModel.getOffers();

    this.#renderBoard();
  }

  #renderBoard() {
    render(this.#appComponent, this.#pointsContainer);
    if (!this.#points.length) {
      this.#renderEmptyList();
    }

    for (let i = 0; i < this.#points.length; i++){
      this.#renderPoint(this.#points[i], this.#destinations, this.#offers);
    }

  }

  #renderPoint(point, destinations, offers) {
    const pointPresenter = new PointPresenter({
      pointContainer: this.#appComponent,
      onDataChange: this.#handlePointChange
    });

    pointPresenter.init(point, destinations, offers);
    this.#pointsPresenters.set(point.id, pointPresenter);
    // console.log(this.#pointsPresenters);
  }

  #handlePointChange = (updatePoint) => {
    this.#points = updateItem(this.#points, updatePoint);
    this.#pointsPresenters.get(updatePoint.id).init(updatePoint, this.#destinations, this.#offers);
  };

  #clearPointList() {
    this.#pointsPresenters.forEach((presenter) => presenter.destroy());
    this.#pointsPresenters.clear();
  }

  #renderEmptyList() {
    render(new EmptyList(), this.#appComponent.element);
  }

}
