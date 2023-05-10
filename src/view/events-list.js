import AbstractView from '../framework/view/abstract-view.js';

function createEventsList() {
  return `<ul class="trip-events__list">
  </ul>`;
}
export default class EventsList extends AbstractView {
  get template() {
    return createEventsList();
  }

  // getElement() {
  //   if (!this.element) {
  //     this.element = createElement(this.getTemplate());
  //   }

  //   return this.element;
  // }

  // removeElement() {
  //   this.element = null;
  // }
}
