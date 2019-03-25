import {
  isEmpty
} from '../utils/strings'
import {
  COOKIE_NAME_TOKEN
} from '../constants';

export const isAuthenticated = (context, cookies) => {
  const isAuthenticated = !isEmpty(context.token) && !isEmpty(cookies[COOKIE_NAME_TOKEN]);
  console.error("isAuthenticated ->", isAuthenticated, context.token, cookies[COOKIE_NAME_TOKEN]);
  return isAuthenticated;
};