import ApiClient from './client';

const certificate = {
  get() {
    return ApiClient.get('/certificate/');
  },
  post(data) {
    return ApiClient.post('/certificate/create/', data);
  },
};

export default certificate;
