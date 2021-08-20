import React from 'react'
const Todo = ({todo, numero, index, deleteTodo}) => {
    return (
        <>
            <div>
                <h3>{numero} - {todo}</h3>
                <button className="btn-delete" onClick={()=> deleteTodo(index)}>x</button>
            </div>
        </>
    )
}
export default Todo
