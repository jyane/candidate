// @flow

import axios from 'axios';
import Rx from 'rxjs';

/**
 * Set the client base settings.
 * @see https://github.com/mzabriskie/axios
 */
const clientBase = axios.create({
  baseURL: '',
  timeout: 2000,
});

const client = {
  head: clientBase.head,
  get: clientBase.get,
  post: clientBase.post,
  put: clientBase.put,
  patch: clientBase.patch,
  delete: clientBase.delete
};

export const rxClient = {
  get: (url: string) => Rx.Observable.fromPromise(client.get(url)),
  post: (url: string) => Rx.Observable.fromPromise(client.post(url)),
  put: (url: string) => Rx.Observable.fromPromise(client.put(url)),
  patch: (url: string) => Rx.Observable.fromPromise(client.patch(url)),
  delete: (url: string) => Rx.Observable.fromPromise(client.delete(url))
};

