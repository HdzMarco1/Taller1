import React,{useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {

    const prueba =[
        {
            nombre: "Manzana",
            precio: 0.50,
            cantidad: 1
        },
        {
            nombre: "pera",
            precio: 0.75,
            cantidad: 1
        },  
        {
            nombre: "sandia",
            precio: 0.80,
            cantidad: 1
        }
    ]
    
    //const [selected, setSelected] = useState({})

    const rederPrice =() => {
        console.log(todos)
        let suma = 0;
        todos.forEach(valor => suma += valor.cantidad*valor.precio);
        return(
            <div>{suma}</div>
        )
    }
    

    const [todo, setTodo] = useState({})

    const [todos, setTodos] = useState([
        // {todo: 'todo 1'},
        // {todo: 'todo 2'},
        // {todo: 'todo 3'}
    ])
    const handleChange = e => setTodo(
        {[e.target.name]: e.target.options[e.target.selectedIndex].text, precio: e.target.value},
        console.log(e.target.value))
  

    const handleClick = e => {
            //console.log(todo);
            setTodos([...todos, todo]);
            //console.log(todo);
    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1);
        setTodos(newTodos)
    }
    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Lista de compras</label><br />
            <select name="todo" onChange={handleChange} id="nombre" required>
                {
                    prueba.map((item, i)=>(
                        <option key={i} value={item}>{item.nombre} ${item.precio}</option>
                    ))
                }
            </select>
            <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value, index) => (
                <Todo todo={value.todo} precio={value.precio} key={index} index={index} deleteTodo={deleteTodo} />
            ))
            
        }
         {rederPrice()}  
        </>
    )
}
export default Form