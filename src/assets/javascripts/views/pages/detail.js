import UrlParser from '../../utils/url-parser';
import RestaurantRepository from '../../repository/restaurant-repository';

const detail = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantRepository.detailRestaurant(url.id);
    return JSON.stringify(restaurant);
  },
};

export default detail;
