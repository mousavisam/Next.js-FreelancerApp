const STORAGE_KEYS = {
  TYPE: "type",
  TOKEN: "token",
  USERNAME: "username",
  REFRESH_TOKEN: "refresh_token",
};

export function setStorageToken(token) {
  window.localStorage.setItem(STORAGE_KEYS.TOKEN, JSON.stringify(token));
}

export function getStorageToken() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.TOKEN));
}

export function setStorageRefreshToken(refresh_token) {
  window.localStorage.setItem(
    STORAGE_KEYS.REFRESH_TOKEN,
    JSON.stringify(refresh_token)
  );
}

export function getStorageRefreshToken() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN));
}

export function setStorageUsername(username) {
  window.localStorage.setItem(STORAGE_KEYS.USERNAME, username);
}

export function getStorageUsername() {
  return window.localStorage.getItem(STORAGE_KEYS.USERNAME);
}

export function hasStorageToken() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.TOKEN)) !== null;
}

export function setStorageType(type) {
  window.localStorage.setItem(STORAGE_KEYS.TYPE, type);
}

export function getStorageType() {
  return window.localStorage.getItem(STORAGE_KEYS.TYPE);
}

export function clearStorage() {
  window.localStorage.clear();
}
