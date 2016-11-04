import React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import type { State } from 'src/states';
import * as Actions from 'src/actions/todo';
import Todos from 'src/components/Todos';

type StateProps = {|
  todos: string[];
  current: string;
|};

const mapStateToProps = (state: State): StateProps => ({
  todos: state.todo.get('todos'),
  current: state.todo.get('current')
});

type DispatchProps = {|
  addTodo: typeof Actions.addTodo,
  updateCurrent: typeof Actions.updateCurrent
|};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  addTodo: (name: string) => dispatch(Actions.addTodo(name)),
  updateCurrent: (value: string) => dispatch(Actions.updateCurrent(value))
});

export type Props = StateProps & DispatchProps;

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

