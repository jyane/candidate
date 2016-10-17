import React from 'react';

import type { Props } from 'src/containers/Todos';
import Todo from 'src/components/Todo';

const Todos = ({ todos, current, addTodo, updateCurrent }: Props) => (
    <div>
      <h1>Todos</h1>
      {
        todos.map((todo, i) =>
          <Todo key={i} todo={todo} />
        )
      }
      <form onSubmit={(e: Event) => {
        e.preventDefault();
        addTodo(current);
        updateCurrent('');
      }}>
        <input
          type="text"
          value={current}
          onChange={(e: Event) => {
            e.preventDefault();
            updateCurrent((e.target: any).value)
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
);

export default Todos;

