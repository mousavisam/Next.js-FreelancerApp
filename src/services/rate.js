import ApiClient from "./client";

const rate = {
  post(data) {
    return ApiClient.post("/rate/", data);
  },
};

export default rate;
