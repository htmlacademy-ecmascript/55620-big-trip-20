import { render, replace, remove } from '../framework/render';
import EventsItemView from '../view/events-item-view';
import EditItemForm from '../view/edit-item';

export default class PointPresenter {
  #pointContainer = null;
  #point = null;
  #destinations = null;
  #offers = null;
  #editComponent = null;
  #pointComponent = null;
  #handleDataChange = null;

  constructor({pointContainer, onDataChange}) {
    this.#pointContainer = pointContainer;
    this.#handleDataChange = onDataChange;
  }

  init(point, destinations, offers) {
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    const prevPointComponent = this.#pointComponent;
    const prevEditComponent = this.#editComponent;

    this.#pointComponent = new EventsItemView({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onEditClick: this.#replaceCardToForm,
      onFavoriteClick: this.#handleFavoriteClick
    });
    this.#editComponent = new EditItemForm({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: this.#replaceFormToCard,
      onEditClick: this.#replaceFormToCard
    });

    if (prevPointComponent === null || prevEditComponent === null) {
      render(this.#pointComponent, this.#pointContainer.element);
      return;
    }

    if (this.#pointContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
      return;
    }
    if (this.#pointContainer.contains(prevEditComponent.element)) {
      replace(this.#editComponent, prevEditComponent);
      return;
    }
    remove(prevPointComponent);
    remove(prevEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToCard();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };


  #replaceCardToForm = () => {
    replace(this.#editComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #replaceFormToCard = () => {
    replace(this.#pointComponent, this.#editComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
