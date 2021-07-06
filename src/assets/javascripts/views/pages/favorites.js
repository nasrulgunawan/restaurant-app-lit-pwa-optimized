import favoriteRestaurantIdb from '../../repository/favorite-restaurant-idb';

const favorites = {
  async render() {
    const restaurants = await favoriteRestaurantIdb.getAllRestaurants();
    return `<x-content restaurants='${JSON.stringify(restaurants)}'></x-content>`
  },
};

export default favorites;
