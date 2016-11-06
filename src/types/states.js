// @flow

import type { List } from 'immutable';

export type Todo = {
  todos: List<string>;
  current: string;
}

export type UserSearch = {}

export type State = {
  todo: Todo;
  userSearch: UserSearch;
}

