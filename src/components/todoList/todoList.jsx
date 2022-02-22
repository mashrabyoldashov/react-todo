import React, { useState } from 'react';
import TodoItem from './todoItem'
import './todoList.css'

function Todos () {
    
    const [todos, setTodos] = useState([
        
    ])
    
    const handleClick = () => {
        let inputValue = document.querySelector('.input')
        let all = document.querySelector('.all-items')
        all.textContent++
        
        const obj = {
            id: (todos[todos.length - 1]?.id + 1) || 0,
            title: inputValue.value.trim(),
            isCompleted: false,
        }

        setTodos(state => [...state, obj])
        inputValue.value = null;

    }

    const handleDeleteClick = (id) => {
        let all = document.querySelector('.all-items')
        all.textContent--
        setTodos(state => state.filter(item => item.id !== id))
    }

    const changeIsCompleted = (event, id) => {
        const isChecked = event.target.checked

        setTodos(state => state.map(element => {
                if (element.id === id) {
                    return {
                        ...element,
                        isCompleted:isChecked
                    }
                }
                return element
            })
        )
    }

    const handelClearItems = () => {
        let all = document.querySelector('.all-items')
        all.textContent = 0;
        setTodos([])
    }

    return (
        <div className='todo'>
            <h1>Create your plan</h1>
            
            <form className='form'>
                 <input className='input' type="text" placeholder='your plan...' />
                 <button className='add-btn' type='button' onClick={handleClick}>add</button>
            </form>

               <div className="wrapper">
               <div>
                        <button className='add-btn left-btn'>
                            ALL <span className='all-items'>0</span>
                        </button>
                        
                        <button className='add-btn center-btn'>
                            COMPLETED <span>0</span>
                        </button>
                        
                        <button className='add-btn right-btn'>
                            UNCOMPLETED <span>0</span>
                        </button>
                    </div>
                    <button className='delete clear' onClick={handelClearItems}>Clear</button>
               </div>

            {
                todos.map(element => {
                    return <TodoItem
                        key={element.id}
                        todo={element}
                        isComplete={changeIsCompleted}
                        onDelete={handleDeleteClick}
                    />
                })
            }

    </div>
    );
}

export default Todos