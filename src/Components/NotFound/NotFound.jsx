import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    useEffect(() => {
        
        document.title = "Página No Encontrada"

        return () => {
            document.title = "Proyecto Final"  
        };
    }, []);

    return (
        <main className='container'>
            <article className='d-flex flex-column justify-content-center align-items-center'>
                <img
                    className='mb-3 p-5'
                    src="https://static.vecteezy.com/system/resources/previews/008/255/803/large_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg"
                    alt="Not Found"
                    style={{ maxWidth: '950px' }}
                />
                <h2 className="text-danger mb-3">Oops! Página no encontrada</h2>
                <p className="lead mb-3">Lo sentimos, la página que estás buscando no existe.</p>
                <Link to="/" className="btn btn-primary mb-3">
                    Ir a la página principal
                </Link>
            </article>
        </main>
    );
}

export default NotFound;
