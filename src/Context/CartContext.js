import {createContext} from 'react'


const CartContext = createContext(); 

const CartProvider = ({children}) => {
    const cart = []
   
    
    const addItem = (item) => {
        
        if (!isInCart(item.id)) {
            cart.push(item)
            return true;
        } else if (isInCart(item.id)) {
            console.log(cart)
            return false;
        }
        
    }
    
    const removeItem = (item) => {
        
        const posItem = cart.find(el => el.id === item.id)

        if (isInCart(item.id) === true ) {
            cart.splice(posItem,1);

        } else {
            return false;
        }
    }
    
    const clear = () => {
        cart.splice(0,cart.length)
        
    }
    
    const isInCart = (id) => {
        return cart.some((el) => el.id === id)
        
    }
    
  
    
    const data = {addItem, removeItem, clear, isInCart, cart}
    return <CartContext.Provider value={data}>{children} </CartContext.Provider>
}

export {CartProvider}
export default CartContext