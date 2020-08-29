import Cookies from 'js-cookie'

const TokenKey = 'token'
const AccessTokenKey = 'access_token'
const FacebookId = 'fb_id'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {expires: 1})
}

export function setAccessToken(token) {
  return Cookies.set(AccessTokenKey, token, {expires: 1})
}

export function setFacebookId(token) {
  return Cookies.set(FacebookId, token, {expires: 1})
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
