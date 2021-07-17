import favoriteRestaurantIdb from '../repository/favorite-restaurant-idb';

const setFavoriteData = {
  async call({restaurant}) {
    await this._saveData(restaurant);
  },

  async _saveData(restaurant) {
    const {id} = restaurant;

    if (await this._isRestaurantExist(id)) {
      this._delete(restaurant);
    } else {
      this._update(restaurant);
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _update(restaurant) {
    favoriteRestaurantIdb.putRestaurant(restaurant);
  },

  _delete(restaurant) {
    favoriteRestaurantIdb.deleteRestaurant(restaurant.id);
  },
};

export default setFavoriteData;
