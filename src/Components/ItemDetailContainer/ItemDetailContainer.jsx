import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./itemdetailcontainer.module.css";
import Swal from 'sweetalert2';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const itemRef = doc(db, "products", id);
                const docItem = await getDoc(itemRef);

                if (docItem.exists()) {
                    setItem({ id: docItem.id, ...docItem.data() });
                } else {
                    Swal.fire({
                        title: "Producto no Encontrado!",
                        icon: "error",
                    }).then(() => {
                        navigate('/notfound');
                    });
                }
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [id, navigate]);

    return (
        <div className={styles.detail}>
            {isLoading ? (
                <div className={styles.loading}>
                    <i className="fa-solid fa-spinner fa-spin"></i><span> Cargando</span>
                </div>
            ) : item && <ItemDetail {...item} />}
        </div>
    );
};