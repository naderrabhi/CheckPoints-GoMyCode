import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task';

const Done = () => {
    const doneList = useSelector(state => state.todoList.filter((todo) => todo.isDone ));
  return (
    <div>
        {doneList.map((todo) => <Task todo={todo} />)}
    </div>
  )
}

export default Done