import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./itemlistcontainer.module.css";
import NotFound from "../NotFound/NotFound.jsx";

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const getProductsDB = (category) => {
        const myProducts = category ?
            query(collection(db, "products"), where("category", "==", category)) :
            query(collection(db, "products"));

        getDocs(myProducts)
            .then((resp) => {
                if (resp.size === 0) {
                    console.log("No hay productos en la base de datos");
                    // Redirige a la página NotFound si no hay productos en la categoría
                    navigate('/notfound');
                    return;
                }
                const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(productList);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getProductsDB(category);
    }, [category, navigate]);

    return (
        <>
            {isLoading ? (
                <div className={styles.loading}>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span> Cargando</span>
                </div>
            ) : (
                products.length > 0 ? <ItemList products={products} /> : <NotFound />
            )}
        </>
    );
};