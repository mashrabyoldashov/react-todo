import React from 'react';

const TodoItem = ({todo, onDelete, isComplete}) => {

    return <div className='item'>
        <input className='checkbox' onChange={(event) =>{isComplete(event, todo.id)}} type="checkbox" checked={todo.isCompleted} />
        <h2 style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
             {todo.title}
        </h2>
        <button className='delete' onClick={() => onDelete(todo.id)}>
            delete
        </button>
    </div>
}

export default TodoItem 