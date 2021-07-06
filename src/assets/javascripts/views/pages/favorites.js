import favoriteRestaurantIdb from '../../repository/favorite-restaurant-idb';

const Like = {
  async render() {
    const restaurants = await favoriteRestaurantIdb.getAllRestaurants();
    return `<x-content data='${JSON.stringify(restaurants)}'></x-content>`
  },
};

export default Like;
