import {createContext} from 'react'
import {useState} from 'react'


const CartContext = createContext(); 

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const carritoProv = cart
   
    
    const addItem = (item, cantidad) => {
        
        if (!isInCart(item.id)) {
            
            const producto = {
                "id": item.id,
                "nombre": item.nombre,
                "valor": item.valor,
                "cantidad": cantidad,
                "stock": item.stock
            }

            carritoProv.push(producto)
            setCart(carritoProv)
            
        } else if (isInCart) {
            const posItem = carritoProv.findIndex(libro => libro.id === item.id)
            carritoProv[posItem].cantidad = cantidad; 
            setCart(carritoProv)
        }
    }
    
    const removeItem = (item) => {
        
        const newProducts = cart.filter((p) => p.id !== item.id);

        setCart(newProducts);
    }
    
    const clear = () => {
        setCart([])
        
    }
    
    const isInCart = (id) => {
        return cart.some((el) => el.id === id)
        
    }
    
  
    
    return <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cart}}>{children} </CartContext.Provider>
}

export {CartProvider}
export default CartContext