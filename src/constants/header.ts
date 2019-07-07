export const HOME = 'home';
export const NEWS = 'news';
export const LOGIN = 'login';

export const header = {
  [HOME]: {
    name: HOME,
    path: '/',
  },
  [NEWS]: {
    name: NEWS,
    path: `/${NEWS}`
  },
  [LOGIN]: {
    name: LOGIN,
    path: `/${LOGIN}`
  }
};

export interface Link {
  name: string,
  path: string,
};
