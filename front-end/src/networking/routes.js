const ROUTES = {
  ALL: '/all',
};

const generateURL = (route) => `${process.env.REACT_APP_API_URL}${route}`;

const generateBackendURL = (route) => `${process.env.REACT_APP_BACKEND_ROUTE}${route}`;

export { ROUTES, generateURL, generateBackendURL };
