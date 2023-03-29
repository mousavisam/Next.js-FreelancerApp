import ApiClient from './client';

const user = {
  register(data) {
    return ApiClient.post('/auth/register/create/', data);
  },
  login(data) {
    return ApiClient.post('/auth/login/', data);
  },
  profile() {
    return ApiClient.get('/profile/');
  },
};

export default user;
