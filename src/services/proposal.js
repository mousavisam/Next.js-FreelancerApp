import ApiClient from "./client";

const proposal = {
  get() {
    return ApiClient.get("/proposal/");
  },
  post(data) {
    return ApiClient.post("/proposal/create/", data);
  },
  patch({ proposal_id, status }) {
    return ApiClient.patch(
      `/proposal/?proposal_id=${proposal_id}&status=${status}`
    );
  },
};

export default proposal;
