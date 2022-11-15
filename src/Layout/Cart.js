import { useContext, useEffect, useState } from "react"
import CartContext from "../Context/CartContext"
import CartItemCount from "../Components/CartItemCount"
import trash from "../Assets/trash-fill.svg"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Notiflix from 'notiflix'

function Cart() {

  const { addItem, removeItem, clear, cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  function agregarACarrito(cantidad, libro) {

    addItem(libro, cantidad)
    resumenPrecio()
  }

  function resumenPrecio() {
    const subtotal = cart.reduce((previus, current) => previus + (current.valor * current.cantidad), 0)
    const iva = (subtotal * 0.21).toFixed(0)
    const total = Number(subtotal * 1.21).toFixed(0);
    const valores = [subtotal, iva, total]
    setTotal(valores)

  }

  useEffect(() => {
    resumenPrecio()
  }, [removeItem, clear])

  function sendOrder() {
    const order = {
      buyer: { name: "Invitado", phone: "11111111", email: "invitado@gmail.com" },
      items: cart,
      total: total[2] | 0
    }


    const db = getFirestore();

    const ordersCollection = collection(db, "orders");
    order.items.length != 0 ?
      addDoc(ordersCollection, order).then(({ id }) =>
        Notiflix.Report.success(
          '¡Orden enviada!',
          `Su numero de orden es: ${id}`,
          'Entendido!',
          {
            width: '360px',
            svgSize: '120px',
          },
        )
      ) : Notiflix.Report.failure(
        'Ups!',
        'El carro esta vacio!',
        'Entendido!'
      )


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
                <td><CartItemCount stock={libro.stock} libro={libro} funcion={agregarACarrito} initial={libro.cantidad} /></td>
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
        <button type="button" data-modal-toggle="authentication-modal-2" className=" bg-red-600 text-white rounded-xl p-3 hover:bg-red-700 ">¡Enviar Orden!</button>
      </div>
      <div id="authentication-modal-2" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal-2">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Ingresa tus datos!</h3>
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre y Apellido</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                </div>
                <div>
                  <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                </div>
                <div>
                  <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )



}


export default Cart
