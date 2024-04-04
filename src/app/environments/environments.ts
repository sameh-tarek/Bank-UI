export const saveToken = (token: String) => {
  localStorage.setItem('token', String(token));
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const logOut = () => {
  localStorage.clear();
};

export const localhost = () => {
  return 'http://localhost:8081/bank';
};

