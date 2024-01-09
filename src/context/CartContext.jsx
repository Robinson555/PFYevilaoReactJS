import { useEffect } from "react";
import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext(null)

//Creamos el provider
export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalCartItems, setTotalCartItems] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (item, quantity) => {
        const { id, name, price, img } = item

        const index = cartItems.findIndex(product => product.id === id)

        if (index !== -1) {
            //Hacemos copia del state para no manipularlo directamente
            const cartItemsCopy = [...cartItems]
            //Modificamos la cantidad del producto aumentando el valor con la cantidad recibida
            cartItemsCopy[index].quantity += quantity
            cartItemsCopy[index].subtotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price

            setCartItems(cartItemsCopy)
        } else {
            //Si no encuentra ningun producto seteamos el carrito con el nuevo item
            const newItem = {
                id,
                name,
                price,
                quantity,
                img,
                subtotal: quantity * price
            }
            setCartItems([...cartItems, newItem])
        }
    }

    const removeItem = (id) => {
        //Elimina productos del Carrito
        const arrayFilter = cartItems.filter(item => item.id !== id)
        setCartItems(arrayFilter)
    }

    //Elimina todo el carrito
    const clearCartItems = () => {
        setCartItems([])
    }

    //Calcula totalidad del monto a pagar
    const handleTotal = () => {
        const total = cartItems.reduce((acum, item) => acum + item.subtotal, 0)
        setTotalCartItems(total)
    }

    //Suma la cantidad total de productos
    const handleTotalQuantity = () => {
        const total = cartItems.reduce((acum, item) => acum + item.quantity, 0)
        setTotalQuantity(total)
    }

    useEffect(() => {
        handleTotal()
        handleTotalQuantity()
    }, [cartItems])


    const productValue = {
        cartItems,
        totalCartItems,
        totalQuantity,
        addItem,
        removeItem,
        clearCartItems
    }

    return <CartContext.Provider value={productValue}> {children} </CartContext.Provider>
}