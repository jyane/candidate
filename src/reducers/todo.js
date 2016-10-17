import type { todoAction } from 'src/actions/todo';

type State = {
  todos: string[];
}

const initialState = {
  todos: []
};

const todo = (state: State, action: todoAction) => {
  return state;
};

export default todo;

