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
  constructor({ appWrapper }) {
    this.appWrapper = appWrapper;
  }

  init() {
    render(this.appComponent, this.appWrapper);
    render(new EditItemForm(), this.appComponent.getElement());
    for (let i = 0; i < 3; i++){
      render(new EventsItem(), this.appComponent.getElement());
    }
  }
}
