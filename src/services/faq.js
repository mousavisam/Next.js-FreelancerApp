import ApiClient from './client';

const faq = {
  get() {
    return ApiClient.get('/faq/');
  },
};

export default faq;
