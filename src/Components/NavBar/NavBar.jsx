import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="img/logo.png" alt="Logo" height={45} width={45} />
                    M&M
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/hombre">
                                Moda Hombre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/mujer">
                                Moda Mujer
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/infantil">
                                Moda Infantil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/calzado">
                                Todo Calzado
                            </Link>
                        </li>
                    </ul>
                    <Link className="nav-link" to="/cart">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
