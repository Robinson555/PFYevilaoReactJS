import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Order } from "../Order/Order"
import styles from "./cart.module.css"

export const Cart = () => {

    const { cartItems, removeItem, clearCartItems, totalCartItems } = useContext(CartContext)

    return (
        <>
            <div className={styles.cart}>
                <h2 className={styles.title}>Carrito</h2>
                <div className={styles.cartdet}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <img className={styles.img} src={item.img} alt="" />
                            <div className={styles.itemDetails}>
                                <p className={styles.name}>Nombre: {item.name}</p>
                                <p className={styles.price}>Precio por unidad: ${item.price}</p>
                                <p className={styles.quantity}>Cantidad: {item.quantity}</p>
                                <p className={styles.subtotal}>Subtotal: ${item.subtotal}</p>
                                <button className={styles.removeItem} onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className={styles.total}>TOTAL DE LA COMPRA: ${totalCartItems}</h3>
                <button className={styles.removeCart} onClick={() => clearCartItems()}>Eliminar Carrito</button>
            </div>
            <Order />
        </>
    );    
}
