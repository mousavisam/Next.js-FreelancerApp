import ApiClient from './client';

const user = {
  register(data) {
    return ApiClient.post('/user/check', data);
  },
};

export default user;
