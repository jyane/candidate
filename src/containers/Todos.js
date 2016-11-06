// @flow

import * as Redux from 'redux';
import { List } from 'immutable';
import { connect } from 'react-redux';

import type { State, Todo } from 'src/types/states';
import type { TodoAction } from 'src/types/actions';

import * as Actions from 'src/actions/todo';
import Todos from 'src/components/Todos';

type StateProps = Todo;

const mapStateToProps = (state: State): StateProps => ({
  ...state.todo
});

type DispatchProps = typeof Actions;

const mapDispatchToProps = (dispatch: Redux.Dispatch<TodoAction>): DispatchProps =>
  Redux.bindActionCreators(Actions, dispatch);

export type Props = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(Todos);

