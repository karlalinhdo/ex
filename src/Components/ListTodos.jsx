import React from 'react';
import PropTypes from 'prop-types';

ListTodos.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

ListTodos.defaultProps = {
    todos: [],
    onTodoClick: null
}

function ListTodos(props) {

    const { todos, onTodoClick } = props;

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <div>
            <ul className="list-todos">
                {todos.map((todo) => (
                    <li key={todo.id} onClick={() => handleClick(todo)}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListTodos;