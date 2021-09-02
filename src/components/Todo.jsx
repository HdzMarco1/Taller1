import React from 'react'
const Todo = ({todo, index, deleteTodo, editTodo}) => {

    //console.log(precio);



    return (
        <>
            <div>
                <h3>{todo.nombre} ${todo.precio}</h3>
                <button className="btn-delete" onClick={()=> deleteTodo(index)}>x</button>
                <input type="number" min="1" defaultValue="1" onChange={ (e) => editTodo(e.target.value, index) }/>
            </div>
        </>
    )
    
}
export default Todo
