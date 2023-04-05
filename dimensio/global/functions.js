import { publicRoutes } from './variables';

export const allowAccess = (route, isAuthenticated) => {
  if (!publicRoutes.includes(route)) {
    if (!isAuthenticated) {
      return false;
    }
  }
  return true;
};
