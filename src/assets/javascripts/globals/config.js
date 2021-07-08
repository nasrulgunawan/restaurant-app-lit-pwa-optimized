const baseUrl = 'https://restaurant-api.dicoding.dev/';

const CONFIG = {
  BASE_URL: baseUrl,
  BASE_IMAGE_URL: `${baseUrl}images/small/`,
  CACHE_NAME: 'Restaurant-App-V1',
  DATABASE_NAME: 'restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://restaurants-feed.herokuapp.com/',
};

export default CONFIG;
