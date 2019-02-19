const Auth = {
  authenticateUser: token => {
    localStorage.setItem('token');
  },

  isUserAuthenticated: () => {
    return localStorage.getItem('token') !== null;
  },

  deauthenticateUser: () => {
    localStorage.removeItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },
};
