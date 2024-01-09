import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import styles from "./itemdetail.module.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (items) => {
        addItem(
            {
                id,
                name,
                description,
                img,
                price,
                stock,
            },
            items
        );
        Swal.fire({
            position: "top-end",
            titleText: "Producto Agregado!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className={styles.itemDetail}>
            <div className={styles.itemDetail_cart}>
                <img className={styles.itemDetail_img} src={img} alt="" />
                <div className={styles.itemDetail_info}>
                    <h1 className={styles.itemDetail_title}>{name}</h1>
                    <p className={styles.itemDetail_des}>"{description}"</p>
                    <p className={styles.itemDetail_price}>${price}</p>
                    <p className={styles.itemDetail_stock}>Stock disponible: {stock}</p>
                <div className={styles.itemDetail_count}>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
                </div>
            <div className={styles.buttonContainer}>
                <Link to="/cart">
                    <button className={styles.button}> Finalizar Compra</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default ItemDetail;
