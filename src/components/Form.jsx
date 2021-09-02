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
    


    const rederPrice =() => {
        console.log(todos)
        let suma = 0;
        todos.forEach(valor => suma += valor.cantidad*valor.precio);
        return(
            <div>{suma.toFixed(2)}</div>
        )
    }
    

    const [todo, setTodo] = useState({})

    const [todos, setTodos] = useState([
        // {todo: 'todo 1'},
        // {todo: 'todo 2'},
        // {todo: 'todo 3'}
    ])


    const handleChange = e => {
        let objeto = prueba[e];
        console.log(objeto);
        setTodo(objeto);
    }
       
    const editTodo = (cantidad,index) => {
        const newTodos = [...todos];
        newTodos.map((x,k) => x.cantidad = k === index ? cantidad : x.cantidad);
        setTodos(newTodos);
      }

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
            <select name="todo" onChange={ (e) => handleChange(e.target.value) } id="nombre" required>
                {
                    prueba.map((item, i)=>(
                        <option key={i} value={i}>{item.nombre} ${item.precio}</option>
                    ))
                }
            </select>
            <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value, index) => (
                <Todo todo={value} key={index} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
            ))
            
        }
         {rederPrice()}  
        </>
    )
}
export default Form