import type { todoAction } from 'src/types/actions'

const addTodo = (todo: string): todoAction => ({
  type: 'ADD_TODO',
  todo
});

const updateCurrent = (value: string): todoAction => ({
  type: 'UPDATE_CURRENT',
  value
});

export {
  addTodo,
  updateCurrent
};

