import RestaurantRepository from '../../repository/restaurant-repository';
import '../../components/content/content';

const home = {
  async render() {
    const restaurants = await RestaurantRepository.allRestaurants();
    return `<x-content restaurants='${JSON.stringify(restaurants)}'></x-content>`;
  },
};

export default home;
