import { render } from '../framework/render';

//ul
import EventsList from '../view/events-list';
//Шаблон для пустого листа
import EmptyList from '../view/events-empty-list';

//Point presenter
import PointPresenter from './point-presenter';
export default class AppPresenter {
  #appWrapper = null;
  #pointsModel = null;
  #appComponent = new EventsList();
  #pointsPresenterList = new Map();

  constructor({ appWrapper, pointModel }) {
    this.#appWrapper = appWrapper;
    this.#pointsModel = pointModel;
  }

  init() {
    const points = [...this.#pointsModel.getPoints()];
    const destinations = this.#pointsModel.getDestinations();
    const offers = this.#pointsModel.getOffers();
    render(this.#appComponent, this.#appWrapper);

    if (!points.length) {
      render(new EmptyList(), this.#appComponent.element);
    }

    for (let i = 0; i < points.length; i++) {
      const pointPresenter = new PointPresenter({
        points,
        destinations,
        offers,
        parentList: this.#appComponent.element,
        onDataChange: this.#handleRoutePointChange,
      });
      pointPresenter.init(points[i]);
      this.#pointsPresenterList.set(points[i].id, pointPresenter);
    }
  }

  #handleRoutePointChange = (updateRoutePoint) => {
    this.#pointsPresenterList.get(updateRoutePoint.id).init(updateRoutePoint);
  };
}
