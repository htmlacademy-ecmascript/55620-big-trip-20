import {RenderPosition, render } from './render';
import TripInfo from './view/trip-info';
import FilterMenu from './view/filteres';
import SortMenu from './view/sorting';
import AppPresenter from './presenter/app-prezenter';
import PointModel from './model/model';

const tripInfoContainer = document.querySelector('.trip-main');
const tripFiltersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const pointModel = new PointModel();
const appPresenter = new AppPresenter({ appWrapper: tripEventsContainer, pointModel });


render(new TripInfo(), tripInfoContainer, RenderPosition.AFTERBEGIN);
render(new FilterMenu(), tripFiltersContainer);
render(new SortMenu(), tripEventsContainer);


appPresenter.init();
