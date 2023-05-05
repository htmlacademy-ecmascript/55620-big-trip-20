import {render } from '../render';

//ul
import EventsList from '../view/events-list';
//li
import EventsItem from '../view/events-item';
//форма редактирования
import EditItemForm from '../view/edit-item';


export default class AppPresenter {
  appComponent = new EventsList();
  itemComponent = new EventsItem();
  constructor({ appWrapper, pointModel }) {
    this.appWrapper = appWrapper;
    this.pointsModel = pointModel;
  }

  init() {
    const points = [...this.pointsModel.getPoints()];
    const destinations = this.pointsModel.getDestinations();
    const offers = this.pointsModel.getOffers();
    // console.log(offers)
    render(this.appComponent, this.appWrapper);
    render(new EditItemForm(points[0], destinations, offers), this.appComponent.getElement());

    for (let i = 1; i < points.length; i++){
      render(new EventsItem(points[i], destinations, offers), this.appComponent.getElement());
    }
  }
}
