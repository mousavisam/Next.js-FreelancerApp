import ApiClient from "./client";

const report = {
  get() {
    return ApiClient.get("/report/");
  },
};

export default report;
