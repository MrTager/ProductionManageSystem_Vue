import Cookies from 'js-cookie'

const TokenKey = 'honyar_pms_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setSessionStorage(key,value) {
  return sessionStorage.setItem(key,value);
}

export function getSessionStorage(key) {
  return sessionStorage.getItem(key);
}
