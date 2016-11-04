import * as Immutable from 'immutable';
import type { todoAction } from 'src/actions/actionTypes';
import { Todo } from 'src/states';

const todo = (state: string[] = [], action: todoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'UPDATE_CURRENT':
    default:
      return state;
  }
};

export default todo;

