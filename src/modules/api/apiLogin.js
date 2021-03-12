import axios from 'axios';

export const loginAuthentication = ({ u_id, u_password }) => {
  return axios.post(
    'http://3.35.221.9:8080/api/member/login',
    {
      uid: u_id,
      password: u_password,
    },
    // { withCredentials: true },
  );
};

export const getLoginMember = token => {
  return axios.get('http://3.35.221.9:8080/api/shop/header', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const setLogout = token => {
  return axios.get('http://3.35.221.9:8080/api/member/logout', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
