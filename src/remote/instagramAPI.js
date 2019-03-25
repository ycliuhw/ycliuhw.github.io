import {
  get
} from './';

export function fetchProfile(token) {
  return get(`/users/self`, {
    access_token: token
  });
}

export function fetchMedia(token) {
  return get(`/users/self/media/recent`, {
    access_token: token
  });
}