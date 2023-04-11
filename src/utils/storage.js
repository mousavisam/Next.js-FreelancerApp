const STORAGE_KEYS = {
  TOKEN: "token",
  TYPE: "type",
};

export function setStorageToken(token) {
  window.localStorage.setItem(STORAGE_KEYS.TOKEN, JSON.stringify(token));
}

export function getStorageToken() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.TOKEN));
}

export function hasStorageToken() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.TOKEN)) !== null;
}

export function setStorageType(type) {
  window.localStorage.setItem(STORAGE_KEYS.TYPE, JSON.stringify(type));
}

export function getStorageType() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.TYPE));
}

export function clearStorage() {
  window.localStorage.clear();
}
