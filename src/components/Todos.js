// @flow

import React from 'react';

import type { Props } from 'src/containers/Todos';
import Todo from 'src/components/Todo';

// flow can not parse destructuring assignment type checking.
const Todos = (props: Props) => (
    <div>
      <h1>Todos</h1>
      {
        props.todos.map((todo, i) =>
          <Todo key={i} todo={todo} />
        )
      }
      <form onSubmit={(e: Event) => {
        e.preventDefault();
        props.addTodo(props.current);
        props.updateCurrent('');
      }}>
        <input
          type="text"
          value={props.current}
          onChange={(e: Event) => {
            e.preventDefault();
            props.updateCurrent((e.target: any).value)
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
);

export default Todos;

