import {render, replace, remove} from '../framework/render';

//ul
import EventsList from '../view/events-list';
//li
import EventsItem from '../view/events-item';
//форма редактирования
import EditItemForm from '../view/edit-item';


export default class AppPresenter {
  // #appComponent = null;
  // #itemComponent = null;
  #appWrapper = null;
  #pointsModel = null;
  #appComponent = new EventsList();
  #itemComponent = new EventsItem();

  constructor({ appWrapper, pointModel }) {
    this.#appWrapper = appWrapper;
    this.#pointsModel = pointModel;
  }


  init() {
    const points = [...this.#pointsModel.getPoints()];
    const destinations = this.#pointsModel.getDestinations();
    const offers = this.#pointsModel.getOffers();
    // console.log(offers)
    render(this.#appComponent, this.#appWrapper);
    // render(new EditItemForm(points[0], destinations, offers), this.#appComponent.element);

    for (let i = 0; i < points.length; i++){
      this.#renderPoints(points[i], destinations, offers);
      // render(new EventsItem(points[i], destinations, offers), this.#appComponent.element);
    }
  }

  #renderPoints(point, destinations, offers) {
    const itemComponent = new EventsItem(point, destinations, offers);
    render(itemComponent, this.#appComponent.element);
  }

}
