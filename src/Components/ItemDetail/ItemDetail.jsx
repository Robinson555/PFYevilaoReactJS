import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {
    const onAdd = (items) => {
        alert(`Se agregaron ${items} al carrito`);
    };

    return (
        <div className="border m-2">
            <div className="card ">
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <img src={img} className="img-fluid w-50 mx-auto my-3" alt="" />
                    <p className="card-text"> {description} </p>
                    <p>Precio: {price} </p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};
