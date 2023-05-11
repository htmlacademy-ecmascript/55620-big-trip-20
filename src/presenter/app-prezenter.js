import {render, replace} from '../framework/render';

//ul
import EventsList from '../view/events-list';
//li
import EventsItem from '../view/events-item';
//форма редактирования
import EditItemForm from '../view/edit-item';
//Шаблон для пустого листа
import EmptyList from '../view/events-empty-list';

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
    for (let i = 0; i < points.length; i++){
      this.#renderPoints(points[i], destinations, offers);
    }
  }

  #renderPoints(point, destinations, offers) {

    const escKeyHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaseFormToPoint();
        document.removeEventListener('keydown', escKeyHandler);
      }
    };
    const itemComponent = new EventsItem({
      point, destinations, offers, onEditFormShow: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyHandler);
      }
    });

    const pointEditForm = new EditItemForm({
      point, destinations, offers, onFormSubmit: () => {
        replaseFormToPoint();
        document.removeEventListener('keydown', escKeyHandler);
      }
    });

    function replacePointToForm() {
      replace(pointEditForm, itemComponent);
    }

    function replaseFormToPoint() {
      replace(itemComponent, pointEditForm);
    }
    render(itemComponent, this.#appComponent.element);
  }

}
