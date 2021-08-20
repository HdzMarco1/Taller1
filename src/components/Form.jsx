import React,{useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    
    const [todo, setTodo] = useState({})
    const [numero, enviarNumero] = useState({})

    const [todos, setTodos] = useState([
        // {todo: 'todo 1'},
        // {todo: 'todo 2'},
        // {todo: 'todo 3'}
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const elNumero = e => enviarNumero({...todo,[e.target.name]: e.target.value})
    const handleClick = e => {
        if(e.state.Todo === '' || e.state.numero === ''){
            
            return  alert('el campo no puede estar vacio')
        }else{
        //console.log(todo);
        //console.log(numero);
        setTodos([...todos, numero])
        }

    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" name="todo" onChange={handleChange} />
            <input type="number" name="numero" onChange={elNumero} />
            <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value, index) => (
                <Todo todo={value.todo} numero={value.numero} key={index} index={index} deleteTodo={deleteTodo} />
            ))
        }
        </>
    )
}
export default Form