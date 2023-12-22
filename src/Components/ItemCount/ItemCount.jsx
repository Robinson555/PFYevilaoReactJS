import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);
    const [stockExhausted, setStockExhausted] = useState(false);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
            setStockExhausted(false);
        } else {
            setStockExhausted(true);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            setStockExhausted(false);
        } else {
            setCount(1);
        }
    };

    const handleAddToCart = () => {
        if (count === stock) {
            setStockExhausted(true);
            return;
        }
        onAdd(count);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row align-items-center mb-3">
                <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
                    -
                </button>
                <strong>{count}</strong>
                <button className="btn btn-outline-secondary mx-3" onClick={increment}>
                    +
                </button>
            </div>
            {stockExhausted ? (
                <p className="badge bg-secondary">No quedan más unidades :( </p>
            ) : (
                <button className="btn btn-outline-info" onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
            )}
        </div>
    );
};
