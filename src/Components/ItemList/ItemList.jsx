import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
    return (
        <>
            <div>
                <div className="container">
                    {products.map((products) => (
                        <Item key={products.id} {...products} />
                    ))}
                </div>
            </div>
        </>
    );
};
