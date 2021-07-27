import favoriteRestaurantIdb from '../src/assets/javascripts/repository/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';
import '../src/assets/javascripts/components/card/card.js';

describe('Unfavorite a RestauranRefavoriteRestaurantIdb', () => {
  let element;
  const restaurant = {
    'id': 'rqdv5juczeskfw1e8671',
    'name': 'Melting Pot',
    'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...',
    'pictureId': '14',
    'city': 'Medan',
    'rating': 4.2,
  };

  beforeEach(async () => {
    element = document.createElement('x-card');
    element.setAttribute('restaurant', JSON.stringify(restaurant));
    document.body.append(element);
    await favoriteRestaurantIdb.putRestaurant(restaurant);
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e8671');
  });

  it('should display unlike widget when the restaurant has been favorited', async () => {
    await TestFactories.createRestaurantData(restaurant);
    expect(element.shadowRoot.querySelector('[aria-label="remove restaurant from favorite"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been favorited', async () => {
    await TestFactories.createRestaurantData(restaurant);
    expect(element.shadowRoot.querySelector('[aria-label="add restaurant to favorite"]')).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createRestaurantData(restaurant);
    element.shadowRoot.querySelector('[aria-label="remove restaurant from favorite"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await favoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e8671');
    element.shadowRoot.querySelector('[aria-label="remove restaurant from favorite"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
