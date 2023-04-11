import ApiClient from './client';

const task = {
  get() {
    return ApiClient.get('/task/');
  },
  post(data) {
    return ApiClient.post('/task/create/', data);
  },
  getRelatedTasks() {
    return ApiClient.get('/task/related_task');
  },
};

export default task;
