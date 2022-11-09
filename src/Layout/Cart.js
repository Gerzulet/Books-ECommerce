import { useContext, useState, useEffect } from "react"
import CartContext from "../Context/CartContext"
import CartItemCount from "../Components/CartItemCount"
import trash from "../Assets/trash-fill.svg"
import {addDoc, collection, getFirestore} from 'firebase/firestore'


function Cart() {

    const { addItem, removeItem, clear, cart} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [id, setOrderId] = useState({}); 

    

  function agregarACarrito(cantidad, libro) {
const subtotal = cart.reduce((previus,current) => previus + (current.valor * current.cantidad), 0)
      const iva = (subtotal * 0.21).toFixed(0)
      const total = Number(subtotal * 1.21).toFixed(0);
    const valores = [subtotal ,iva, total]


        addItem(libro,cantidad)
        setTotal(valores)

  }
  
   function sendOrder() {
        const order = {
        buyer: {name: "Invitado", phone: "11111111", email:"invitado@gmail.com"}, 
        items: cart, 
        total: total[2] 
    }

    const db = getFirestore(); 

    const ordersCollection = collection(db, "orders"); 
    addDoc(ordersCollection, order).then(({id}) => alert("Se numero de orden es " + id))
clear();
  } 


  


    return (

        <div className=" h-[30rem] w-[90%] ml-20 bg-white my-9 static overflow-auto rounded-xl ">

            <table className="table-auto border-separate border-spacing-1 w-full border pt-2 overflow-scroll">
                <thead>
                    <tr >
                        <th >Articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        
                    </tr>
                </thead>
                <tbody className="text-center ">
                    {cart
                    .map((libro) => 
                          <tr key={libro.id}>
                          <td>{libro.nombre}</td>
                          <td>$ {libro.valor} US </td>
                          <td><CartItemCount stock={libro.stock} libro = {libro} funcion={agregarACarrito} initial ={libro.cantidad}/></td>
                          <td><img src={trash} onClick={() => removeItem(libro)} className="ml-20 h-5 cursor-pointer"></img></td>
                      </tr>
                    )}

            
            





                </tbody>




            </table>


            <div className="flex items-center justify-around bg-slate-500  flex-grow h-16  w-[90%] absolute bottom-0 mb-10 rounded-b-xl">

                <button onClick={clear}>
                    <img src={trash} className="h-8 fill-slate-200"></img>
                </button>


                <div className="flex items-center">
                    <h2 className="text-white text-xl font-sans mx-4">Subtotal: </h2>
                    <h1 className="text-xl ml-2 text-white  hover:animate-pulse cursor-default">$ {total[0]} US</h1>
                    <h2 className="text-white text-xl font-sans mx-4">IVA: </h2>
                    <h1 className="text-xl ml-2 text-white  hover:animate-pulse cursor-default">$ {total[1]} US</h1>
                    <h2 className="text-white text-2xl font-sans mx-10">Total: </h2>
                    <h1 className="text-2xl ml-2 text-white  hover:animate-pulse cursor-default">$ {total[2]} US</h1>

                </div>
                <button onClick={sendOrder}className=" bg-red-600 text-white rounded-xl p-3 hover:bg-red-700 ">¡Enviar Orden!</button>
            </div>
        </div>
    )



}


export default Cart
