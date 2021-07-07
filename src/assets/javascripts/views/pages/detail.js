import UrlParser from '../../utils/url-parser';
import RestaurantRepository from '../../repository/restaurant-repository';
import '../../components/content-detail/content-detail';

const detail = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantRepository.detailRestaurant(url.id);
    return `<x-content-detail restaurant='${JSON.stringify(restaurant)}'></x-content-detail>`;
  },
};

export default detail;
