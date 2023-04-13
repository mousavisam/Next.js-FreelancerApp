import ApiClient from "./client";

const user = {
  register(data) {
    return ApiClient.post("/auth/register/create/", data);
  },
  login(data) {
    return ApiClient.post("/auth/login/", data);
  },
  socialLogin(data) {
    return ApiClient.post("/auth/signin/", data);
  },
  socialLoginData(data) {
    return ApiClient.get("/auth/login/get_user", data);
  },
  updateType(params) {
    return ApiClient.patch("/auth/login/update_user_type", null, { params });
  },
  profile() {
    return ApiClient.get("/profile/");
  },
  logout(data) {
    return ApiClient.post("/auth/logout/", data);
  },
  getAll() {
    return ApiClient.get("/auth/register");
  },
};

export default user;
