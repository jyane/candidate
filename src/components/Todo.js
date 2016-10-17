import React from 'react';

type Props = {
  todo: string;
}

const Todo = ({ todo }: Props) => (
  <p>{todo}</p>
);

export default Todo;

