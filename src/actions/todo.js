export type todoAction = { type: 'ADD_TODO', todo: string };

const addTodo = (todo: string) => ({
  type: 'ADD_TODO',
  todo
});

export {
  addTodo
}

