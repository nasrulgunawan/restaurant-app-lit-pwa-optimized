import setFavoriteData from '../../src/assets/javascripts/utils/set-favorite-data';

const createRestaurantData = async (restaurant) => {
  await setFavoriteData.call({restaurant: restaurant});
};

export {createRestaurantData};
