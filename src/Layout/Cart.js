import { useContext } from "react"
import CartContext from "../Context/CartContext"


function Cart () {

    const {addItem, removeItem, clear} = useContext(CartContext)





    return (

        <div className=" h-[30rem] w-[90%] ml-20 bg-white my-5">

            <table className="table-fixed ">
                <thead>
                    <tr>
                        <th >Articulo</th>
                        <th >Cantidad</th>
                        <th >Precio</th>
                    </tr>
                </thead>
                <tbody>


                </tbody>


            </table>


        </div>
    )



}


export default Cart