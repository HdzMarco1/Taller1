import React from 'react'
const Todo = ({todo, precio, index, deleteTodo}) => {

    //console.log(precio);


    function handleChange(e){
        //let cantidad = e.target.value;
            const precios = [
                {
                    todo: todo,
                    cantidad : Number(e.target.value),
                    precio: Number(precio)
                }   
            ];
       
        let suma = 0;
        //precios.cantidad = Number(e.target.value);
        //precios.precio = Number(precio);
        
        precios.forEach((valor)=> suma += valor.cantidad*valor.precio)

        //suma += precio*cantidad;
        console.log(suma);
        console.log(precios);
    }


    return (
        <>
            <div>
                <h3>{todo}</h3>
                <button className="btn-delete" onClick={()=> deleteTodo(index)}>x</button>
                <input type="number" min="1" defaultValue="1"  onChange={handleChange}/>
            </div>
        </>
    )
    
}
export default Todo
