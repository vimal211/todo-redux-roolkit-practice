import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../reducers/todoReducer'

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch()
    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo('');
    }
  return (
    <form onSubmit={handleAddTodo}>
        <input type="text" value={todo} onChange={(e) => {setTodo(e.currentTarget.value)}}/>
        <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo