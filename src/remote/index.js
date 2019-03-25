/* eslint-disable no-console */
import 'isomorphic-fetch';

import querystring from 'querystring';
import {
  parse as parseUrl
} from 'url';
import {
  isEmpty
} from '../utils/strings';



// const BASE_URL = `https://api.instagram.com/v1`;
const BASE_URL = `http://localhost:3333`;

export function resolveUrl(path) {
  if (!BASE_URL) {
    throw new Error('No `BASE_URL` defined in environment');
  }
  return BASE_URL + path;
}

export function buildUrl(baseUrl, options = null) {
  const queryString = !!options ? querystring.stringify(options) : '';
  return !!queryString ? (baseUrl + '?' + queryString) : baseUrl;
}

export function getQueryParams(url) {
  const qs = parseUrl(url).query;
  return querystring.decode(qs);
}

export function checkStatus(response) {
  const {
    status
  } = response;
  const validStatus = status >= 200 && status < 300;
  const internalError = status >= 500 && status < 600;
  const unauthorized = status === 401;

  return new Promise((resolve, reject) => {
    if (validStatus) {
      return resolve(response.json());
    } else if (internalError) {
      const errorMessage = `${response.statusText} (Status Code: ${status})`;
      console.warn(`checkStatus -> `, errorMessage, response);
      return reject(new Error(errorMessage));
    } else {
      return response.json()
        .then(json => {
          const error = new Error(response.statusText);
          error.ok = response.ok;
          error.status = response.status;
          error.response = json;
          return reject(error);
        })
        .catch(e => {
          // TODO: refactor here later
          const error = new Error(e.message);
          error.ok = response.ok;
          error.status = response.status;
          error.response = {
            error: e.message
          };
          return reject(error);
        });
    }
  });
}

function remoteCall(path, method, data) {
  let url = path;

  // adds the base URL to the path
  if (!path.startsWith('http') && !path.startsWith('//')) {
    url = resolveUrl(url);
  }

  const payload = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: method
  };

  if (!!data) {
    if (method === 'GET') {
      url = buildUrl(url, data);
    } else {
      payload.body = JSON.stringify(data);
    }
  }
  // workaround for "Unexpected end of input"
  if (method === 'DELETE') {
    return fetch(url, payload).then(json => json);
  }
  // return fetch(url, payload).then(response => response.json());
  return fetch(url, payload).then(checkStatus);
}

export const get = (path, data) => {
  console.error("get", path, data)
  return remoteCall(path, 'GET', data);
}

export const post = (path, data) => {
  return remoteCall(path, 'POST', data);
}

export const put = (path, data) => {
  return remoteCall(path, 'PUT', data);
}

export const patch = (path, data) => {
  return remoteCall(path, 'PATCH', data);
}

export const del = (path, data) => {
  return remoteCall(path, 'DELETE', data);
}