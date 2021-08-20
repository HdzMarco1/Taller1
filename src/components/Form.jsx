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
        if(Object.values(todo).length === 0 || Object.values(numero).length === 0 || todo.todo.trim() === ''){
            return  alert('los campos no puede estar vacios');
        }else if(numero.numero <= 0){
            return alert('el campo cantidad no puede ser 0');
        }else{
            //console.log(todo);
            console.log(numero);
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
            <input type="text" name="todo" placeholder="tipo de objeto" onChange={handleChange} required/>
            <input type="number" name="numero" placeholder="cantidad" onChange={elNumero} required/>
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