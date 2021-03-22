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

export const findLoginId = ({ u_name, u_email }) => {
  return axios.post('http://3.35.221.9:8080/api/member/find_id', {
    name: u_name,
    email: u_email,
  });
};
export const findLoginPassword = ({ u_name, u_id, u_email }) => {
  return axios.post('http://3.35.221.9:8080/api/member/find_pw', {
    name: u_name,
    uid: u_id,
    email: u_email,
  });
};
export const changePassword = info => {
  return axios.post('http://3.35.221.9:8080/api/member/find_pw_change', info);
};
export const setLogout = token => {
  return axios.get('http://3.35.221.9:8080/api/member/logout', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
