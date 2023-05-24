import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDateMonthDay, humanizeDateHourMin, humanizeDiffTime } from '../utils/dateUtils';

const createOffersList = (arr) => arr.map((item) => `<li class="event__offer">
    <span class="event__offer-title">${item.title}</span>
    +€&nbsp;
    <span class="event__offer-price">${item.price}</span>
  </li>`).join('');

function createEventsItemView(point, destinations, offers) {
  //Destructing data
  const { basePrice, dateFrom, dateTo, isFavorite, destination, type, offers: offersList } = point;

  //Find current Distination & Offers
  const pointDestination = destinations.find((item) => destination === item.id);
  const pointOffers = offers.find((item) => type === item.type);

  //Filter current offers & create list
  const pointOffersList = pointOffers.offers.filter((item) => offersList.includes(+item.id));
  const eventOffersList = createOffersList(pointOffersList);

  //Deate-Time function
  const eventDate = humanizeDateMonthDay(dateFrom);
  const hoursMinsFrom = humanizeDateHourMin(dateFrom);
  const hoursMinsTo = humanizeDateHourMin(dateTo);
  const timeReminds = humanizeDiffTime(dateFrom, dateTo);

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${eventDate}</time>
      <div class="event__type">
        <img class="event__type-icon" src="img/icons/${type}.png" alt="Event type icon" width="42" height="42">
      </div>
      <h3 class="event__title">${type} ${pointDestination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${hoursMinsFrom}</time>
          —
          <time class="event__end-time" datetime="${dateTo}">${hoursMinsTo}</time>
        </p>
        <p class="event__duration">${timeReminds}</p>
      </div>
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${eventOffersList}
      </ul>
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
}
export default class EventsItemView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;
  #handelEditClick = null;
  #handleFavoriteClick = null;

  constructor({ point, destinations, offers, onEditClick, onFavoriteClick }) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handelEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createEventsItemView(this.#point, this.#destinations, this.#offers);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handelEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };

}
