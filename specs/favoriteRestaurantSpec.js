import favoriteRestaurantIdb from '../src/assets/javascripts/repository/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';
import '../src/assets/javascripts/components/card/card.js';

describe('Favorite a RestauranRefavoriteRestaurantIdb', () => {
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
    await TestFactories.createRestaurantData(restaurant);
    element = document.createElement('x-card');
    element.setAttribute('restaurant', JSON.stringify(restaurant));
    document.body.append(element);
  });

  it('should show the like button when the restaurant has not been favorited before', () => {
    expect(element.shadowRoot.querySelector('[aria-label="add restaurant to favorite"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', () => {
    expect(element.shadowRoot.querySelector('[aria-label="remove restaurant from favorite"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    element.shadowRoot.querySelector('.icon-container').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurantIdb.getRestaurant('rqdv5juczeskfw1e867');

    expect(restaurant).toEqual(restaurant);
    favoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await favoriteRestaurantIdb.putRestaurant(restaurant);
    element.shadowRoot.querySelector('.icon-container').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([restaurant]);

    favoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
  });
});
