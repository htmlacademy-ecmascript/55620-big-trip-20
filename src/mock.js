// Allowed: ┃bus┃train┃ship┃drive┃flight┃check-in┃sightseeing┃restaurant
import { getRandomInt } from './utils';

const mockPoints = [
  { id: '01',
    basePrice: getRandomInt(200, 5000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 2,
    isFavorite: true,
    offers: [1,3],
    type: 'taxi',
  },
  { id: '02',
    basePrice: getRandomInt(200, 3000),
    dateFrom: '2019-09-10T20:40:00.845Z',
    dateTo:   '2019-09-11T20:40:00.845Z',
    destination: 4,
    isFavorite: false,
    offers: [2,3],
    type: 'bus',
  },
  { id:'03',
    basePrice: getRandomInt(200, 3000),
    dateFrom: '2020-10-10T22:50:56.845Z',
    dateTo: '2020-10-11T09:20:10.375Z',
    destination: 1,
    isFavorite: true,
    offers: [1,2],
    type: 'flight',
  },
  { id: '04',
    basePrice: getRandomInt(200, 3000),
    dateFrom: '2023-09-10T10:40:06.845Z',
    dateTo: '2023-10-11T09:10:10.375Z',
    destination: 3,
    isFavorite: false,
    offers: [1],
    type: 'sightseeing',
  },
];

const mockDestinations = [
  { id:1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Cras aliquet varius magna, non porta ligula feugiat eget.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Fusce tristique felis at fermentum pharetra'
      },{
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Aliquam id orci ut lectus varius viverra.'
      },
    ]
  },
  { id:2,
    description: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Form',
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Sed blandit, eros vel aliquam faucibus'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'euismod diam, eu luctus nunc ante ut dui.'
      },{
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'ex euismod diam, eu luctus nunc .'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Sed blandit,'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Sed.'
      },{
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'faucibus, purus ex euismod diam.'
      },
    ]
  },
  {id:3,
    description: 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    name: 'Amsterdam',
    pictures: [ ],
  },
  {id:4,
    description: 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'In rutrum ac purus sit amet tempus.'
      },{
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Nunc fermentum tortor ac porta dapibus.'
      },
    ],
  },
];

const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': '1',
        'title': 'Upgrade to a business class',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '2',
        'title': 'Order Uber ',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '3',
        'title': 'Add luggage',
        'price': getRandomInt(100, 500)
      },
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': '1',
        'title': 'Switch to comfort',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '2',
        'title': 'Add luggage',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '3',
        'title': 'Spesial menu: vagan/vagetarian etc.',
        'price': getRandomInt(100, 1000)
      },
    ]
  },
  {
    'type': 'sightseeing',
    'offers': [
      {
        'id': '1',
        'title': 'Book tickets',
        'price': getRandomInt(100, 250)
      },
      {
        'id': '2',
        'title': 'Lunch in city ',
        'price': getRandomInt(400, 1650)
      },
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': '1',
        'title': 'Add luggage',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '2',
        'title': 'Choose seats',
        'price': getRandomInt(100, 200)
      },
      {
        'id': '3',
        'title': 'Book tickets',
        'price': getRandomInt(100, 250)
      },
    ]
  }
];

export { mockPoints, mockDestinations, mockOffers };
