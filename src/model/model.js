import { mockPoints, mockDestinations, mockOffers } from '../mock';

export default class PointModel {
  constructor() {
    this.points = mockPoints;
    this.destinations = mockDestinations;
    this.offers = mockOffers;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
