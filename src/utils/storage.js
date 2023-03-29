const STORAGE_KEYS = {
  TOKEN: "token",
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

export function clearStorage() {
  window.localStorage.clear();
}
