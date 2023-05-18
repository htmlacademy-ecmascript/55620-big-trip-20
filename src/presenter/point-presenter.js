import { remove, render, replace } from '../framework/render';
//li
import EventsItem from '../view/events-item';
//форма редактирования
import EditItemForm from '../view/edit-item';

export default class PointPresenter {
  #points = null;
  #destinations = null;
  #offers = null;
  #itemComponent = null;
  #pointEditForm = null;
  #escKeyHandler = null;
  #parentList = null;
  #routeItem = null;
  #handleDataChange = null;

  constructor({ points, destinations, offers, parentList, onDataChange }) {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#parentList = parentList;
    this.#handleDataChange = onDataChange;
  }

  #renderPoints(point, destinations, offers) {
    this.#escKeyHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        this.#replaseFormToPoint();
      }
    };
    this.#itemComponent = new EventsItem({
      point,
      destinations,
      offers,
      onEditFormShow: () => {
        this.#replacePointToForm();
      },
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditForm = new EditItemForm({
      point,
      destinations,
      offers,
      onFormSubmit: () => {
        this.#replaseFormToPoint();
      },
    });

    render(this.#itemComponent, this.#parentList);
  }

  #replacePointToForm() {
    replace(this.#pointEditForm, this.#itemComponent);
    document.addEventListener('keydown', this.#escKeyHandler);
  }

  #replaseFormToPoint() {
    replace(this.#itemComponent, this.#pointEditForm);
    document.removeEventListener('keydown', this.#escKeyHandler);
  }

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#routeItem, isFavorite: !this.#routeItem.isFavorite});
  };

  init(item) {
    const prevPointComponent = this.#itemComponent;
    const prevEditComponent = this.#pointEditForm;
    this.#routeItem = item;
    if (prevPointComponent === null, prevEditComponent === null) {
      this.#renderPoints(item, this.#destinations, this.#offers);
      return;
    }

    if (this.#parentList.contains(prevPointComponent.element)) {
      replace(this.#itemComponent, prevPointComponent);
    }
    if (this.#parentList.contains(prevEditComponent.element)) {
      replace(this.#pointEditForm, prevEditComponent);
    }
    remove(prevPointComponent);
    remove(prevEditComponent);
  }
}
