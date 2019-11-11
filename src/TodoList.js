import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as actionsTodo from "./store/actions/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => {
  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => removeTodo(todo.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo("novo todo")}>Adicionar</button>
    </Fragment>
  );
};

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionsTodo, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
