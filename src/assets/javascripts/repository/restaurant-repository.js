import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantRepository {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.all);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantRepository;
