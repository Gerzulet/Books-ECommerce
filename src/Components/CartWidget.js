import cart from "../Assets/cart3.svg"
import { NavLink } from "react-router-dom";

function CartWidget() {
    return (
        <NavLink to={`/cart`} > <img className="h-9 mx-4 cursor-pointer" src={cart}></img></NavLink>
            
           
            
    );
}

export default CartWidget;
