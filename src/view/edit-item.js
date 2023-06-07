import AbstractStatefulView from '../framework/view/abstract-stateful-view';

//Generation point foto
const createImgList = (arr) => arr.map((item) => `
  <img class="event__photo" src="${item.src}" alt="${item.description}">
  `).join('');

//Generation Option Select
const createOptionsList = (arr) => arr.map((item) => `<option value="${item.name}"></option>`).join('');

//Generate Event type list
const createEventList = (arr, type) => arr.map((item) => `<div class="event__type-item">
  <input id="event-type-${item.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.type}" ${item.type === type ? 'checked' : ''}>
  <label class="event__type-label  event__type-label--${item.type}" for="event-type-${item.type}-1">${item.type}</label>
</div>`).join('');

//Generate Offer checking
const createOfferSelectors = (arr, base, type, pointID) => arr.map((item) => {
  const isChecked = base.includes(+item.id) ? 'checked' : '';
  return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${pointID}-${item.id}" type="checkbox" name="event-offer-${type}" ${isChecked ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${pointID}-${item.id}">
      <span class="event__offer-title">${item.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${item.price}</span>
    </label>
  </div>`;
}).join('');

function createEditItemForm(point, destinations, offers) {

  //Point Data destructurization
  const { id: pointID, offers: eventOffers, type } = point;

  //Find current destination & destruct data
  const pointDestination = destinations.find((item) => point.destination === item.id);
  const { description, pictures } = pointDestination;

  //Rendering form structure
  const createEventFotoList = createImgList(pictures);
  const createCityNameList = createOptionsList(destinations);
  const createEventTypeList = createEventList(offers, type);

  //Find & render offers checking list
  const currentOffer = offers.find((item) => item.type === type);
  const { type: curentOfferType, offers: currentOfferArr } = currentOffer;
  const createOffersSelectorList = createOfferSelectors(currentOfferArr, eventOffers, curentOfferType, pointID);

  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              ${createEventTypeList}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
          <datalist id="destination-list-1">
            ${createCityNameList}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${createOffersSelectorList}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
          <div class="event__photos-container">
          <div class="event__photos-tape">
          ${createEventFotoList}
          </div>
        </div>
        </section>
      </section>
    </form>
  </li>`;
}

export default class EditItemForm extends AbstractStatefulView {
  // #point = null;
  #destinations = null;
  #offers = null;
  #handleFormSubmit = null;
  #handelEditClick = null;

  constructor({ point, destinations, offers, onFormSubmit, onEditClick }) {
    super();
    this._setState(EditItemForm.parseTripToState(point));
    // this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handelEditClick = onEditClick;
    this.#handleFormSubmit = onFormSubmit;
    this._restoreHandlers();

  }

  get template() {
    return createEditItemForm(this._state, this.#destinations, this.#offers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditItemForm.parseStateToTrip(this._state));
    // this.#handleFormSubmit(this.#point);
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handelEditClick();
  };

  #clickHandlerType = (evt) => {
    evt.preventDefault();
    this.updateElement({

      type: evt.target.value,
      offers: []

    });

  };

  #changeHandlerDestination = (evt) => {
    evt.preventDefault();
    const selectedDestination = this.#destinations.find((tripDest) => tripDest.name === evt.target.value);
    this.updateElement({
      destination: selectedDestination.id
    });
  };

  #changeHandlerOffer = (evt) => {
    evt.preventDefault();
    const checkedBoxed = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));
    this._setState({
      offers: checkedBoxed.map((el) => el.id)
    });
  };

  #changeHandlerPrice = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: evt.target.value
    });

  };

  static parseTripToState(point) {
    return {
      ...point
    };
  }

  static parseStateToTrip (state) {
    return state;
  }

  reset = (point) => {
    this.updateElement(EditItemForm.parseTripToState(point));
  };


  _restoreHandlers() {
    this.element.querySelector('form.event').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);

    this.element.querySelector('.event__type-group').addEventListener('change', this.#clickHandlerType);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#changeHandlerDestination);
    this.element.querySelector('.event__available-offers').addEventListener('change', this.#changeHandlerOffer);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#changeHandlerPrice);
  }

}
