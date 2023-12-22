import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
    return (
        <div className="border m-2 col-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img src={img} className="img-fluid w-100 mx-auto my-3" alt="" />
                    <p className="card-text">{description}</p>
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-outline-success">Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
