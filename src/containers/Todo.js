import * as Redux from 'redux';
import { connect } from 'react-redux';

import * as Actions from 'src/actions/todo';

type StateProps = {
  todos: string[];
};

const mapStateToProps = (state: any): StateProps => ({
  todos: state.todo.todos
});

type DispatchProps = {
  addTodo: (name: string) => void;
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  addTodo: (name: string) => dispatch(Actions.addTodo(name))
});

type Props = StateProps & DispatchProps;

const Todo = ({ addTodo }: Props) => {
  let input: any = '';

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
      }}>
        <input type="text" ref={(node) => input = node} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

