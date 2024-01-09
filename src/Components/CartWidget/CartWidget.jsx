import { BsCartCheck } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <BsCartCheck />
            <strong>({totalQuantity})</strong>
        </div>
    );
};
