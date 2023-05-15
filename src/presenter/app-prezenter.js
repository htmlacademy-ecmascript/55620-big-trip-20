import { render, replace } from '../framework/render';

//ul
import EventsList from '../view/events-list';
//li
import EventsItem from '../view/events-item';
//форма редактирования
import EditItemForm from '../view/edit-item';
//Шаблон для пустого листа
import EmptyList from '../view/events-empty-list';

//Point presenter
// import PointPresenter from './point-presenter';
export default class AppPresenter {
  #appWrapper = null;
  #pointsModel = null;
  #appComponent = new EventsList();

  constructor({ appWrapper, pointModel }) {
    this.#appWrapper = appWrapper;
    this.#pointsModel = pointModel;
  }

  init() {
    // const points = [];
    const points = [...this.#pointsModel.getPoints()];
    const destinations = this.#pointsModel.getDestinations();
    const offers = this.#pointsModel.getOffers();
    render(this.#appComponent, this.#appWrapper);

    if (!points.length) {
      render(new EmptyList(), this.#appComponent.element);
    }
    // const pointPresenter = new PointPresenter({
    //   points,
    //   destinations,
    //   offers,
    //   parentList: this.#appComponent,
    // });

    // pointPresenter.init(point);
    //Отрисовывает, но нормально работает ТОЛЬКО последний элемент.
    for (let i = 0; i < points.length; i++) {
      // pointPresenter.init(points[i]);
      this.#renderPoints(points[i], destinations, offers);
    }
  }

  #renderPoints(point, destinations, offers) {
    const escKeyHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaseFormToPoint();
      }
    };
    const itemComponent = new EventsItem({
      point,
      destinations,
      offers,
      onEditFormShow: () => {
        replacePointToForm();
      },
    });

    const pointEditForm = new EditItemForm({
      point,
      destinations,
      offers,
      onFormSubmit: () => {
        replaseFormToPoint();
      },
    });

    function replacePointToForm() {
      replace(pointEditForm, itemComponent);
      document.addEventListener('keydown', escKeyHandler);
    }

    function replaseFormToPoint() {
      replace(itemComponent, pointEditForm);
      document.removeEventListener('keydown', escKeyHandler);
    }
    // console.log(this.#appComponent.element);
    render(itemComponent, this.#appComponent.element);
  }
}
