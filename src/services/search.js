import ApiClient from "./client";

const search = {
  get(keyword) {
    return ApiClient.get("/search/?keyword=" + keyword);
  },
};

export default search;
