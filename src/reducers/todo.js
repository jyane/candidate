// @flow

import * as Immutable from 'immutable';

import type { TodoAction } from 'src/types/actions';
import type { Todo } from 'src/types/states';

const initialState = {
  todos: Immutable.List(),
  current: ''
}

const todo = (state: Todo = initialState, action: TodoAction): Todo => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: state.todos.push(action.todo) });
    case 'UPDATE_CURRENT':
      return Object.assign({}, state, { current: action.value });
    default:
      (action: empty);
      return state;
  }
};

export default todo;

