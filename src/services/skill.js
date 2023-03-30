import ApiClient from './client';

const skill = {
  get() {
    return ApiClient.get('/skill/');
  },
  post(data) {
    return ApiClient.post('/skill/create/', data);
  },
};

export default skill;
