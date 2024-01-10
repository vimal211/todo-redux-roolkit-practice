import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../reducers/todoReducer'

function TodoList() {
    const todoList = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleDeleteClick = (id) => {
        dispatch(removeTodo(id));
    }

  return (
    <div>
        {todoList.map((list) => {
            return <div key={list.id}><span>{list.text}</span><button onClick={() => handleDeleteClick(list.id)}>Delete</button></div>
        })}
    </div>
  )
}

export default TodoList