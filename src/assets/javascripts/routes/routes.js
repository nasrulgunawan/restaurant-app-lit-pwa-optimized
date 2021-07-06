import home from '../views/pages/home';
import detail from '../views/pages/detail';
import favorites from '../views/pages/favorites';

const routes = {
  '/': home,
  '/favorites': favorites,
  '/restaurants/:id': detail,
};

export default routes;
