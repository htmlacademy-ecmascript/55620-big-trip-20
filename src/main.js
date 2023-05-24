import { RenderPosition, render } from './framework/render';
import TripInfo from './view/trip-info';
import PointModel from './model/model';
import AppPresenter from './presenter/app-presenter';
import HeaderPresenter from './presenter/header-presenter';

const tripInfoContainer = document.querySelector('.trip-main');
const tripFiltersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const appPresenter = new AppPresenter({ pointsContainer: tripEventsContainer, pointModel });

const filterData = pointModel.getPoints();
const headPresenter = new HeaderPresenter({filterContainer: tripFiltersContainer, tripSortContainer: tripEventsContainer, pointData: filterData});


render(new TripInfo(), tripInfoContainer, RenderPosition.AFTERBEGIN);

appPresenter.init();
headPresenter.init();
