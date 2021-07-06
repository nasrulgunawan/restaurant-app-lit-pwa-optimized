import home from '../views/pages/home';
import detail from '../views/pages/detail';
import favorites from '../views/pages/favorites';

const routes = {
  '/': home,
  '/favorites': favorites,
  '/detail/:id': detail,
};

export default routes;
