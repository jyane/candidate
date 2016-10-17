import type { todoAction } from 'src/types/actions';
import type { TodoState as State } from 'src/types/states';

const initialState: State = {
  todos: [],
  current: ''
};

const todo = (state: State = initialState, action: todoAction) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const todos = state.todos.concat();
      todos.push(action.todo);
      return Object.assign({}, state, { todos });
    }
    case 'UPDATE_CURRENT':
      return Object.assign({}, state, { current: action.value });
    default:
      return state;
  }
};

export default todo;

