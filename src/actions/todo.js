// @flow

import type { TodoAction } from 'src/types/actions';

const addTodo = (todo: string): TodoAction => ({
  type: 'ADD_TODO',
  todo
});

const updateCurrent = (value: string): TodoAction => ({
  type: 'UPDATE_CURRENT',
  value
});

export {
  addTodo,
  updateCurrent
};

