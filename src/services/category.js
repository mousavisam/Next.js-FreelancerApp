import ApiClient from './client';

const category = {
  getAll() {
    return ApiClient.get('/category/');
  },
};

export default category;
