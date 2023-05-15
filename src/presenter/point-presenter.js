import { render, replace } from "../framework/render";
//li
import EventsItem from "../view/events-item";
//форма редактирования
import EditItemForm from "../view/edit-item";

export default class PointPresenter {
  #points = null;
  #destinations = null;
  #offers = null;
  #itemComponent = null;
  #pointEditForm = null;
  #escKeyHandler = null;
  #parentList = null;
  #item = null;

  constructor({ points, destinations, offers, parentList }) {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#parentList = parentList;
  }

  #renderPoints(point, destinations, offers) {
    this.#escKeyHandler = (evt) => {
      if (evt.key === "Escape") {
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
    });

    this.#pointEditForm = new EditItemForm({
      point,
      destinations,
      offers,
      onFormSubmit: () => {
        this.#replaseFormToPoint();
      },
    });

    render(this.#itemComponent, this.#parentList.element);
  }

  #replacePointToForm() {
    replace(this.#pointEditForm, this.#itemComponent);
    document.addEventListener("keydown", this.#escKeyHandler);
  }

  #replaseFormToPoint() {
    replace(this.#itemComponent, this.#pointEditForm);
    document.removeEventListener("keydown", this.#escKeyHandler);
  }

  init(item) {
    this.#item = item;
    this.#renderPoints(this.#item, this.#destinations, this.#offers);
    //   for (let i = 0; i < this.#points.length; i++) {
    //     this.#renderPoints(this.#points[i], this.#destinations, this.#offers);
    //   }
  }
}
