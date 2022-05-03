import React from 'react'; 
import {Link} from 'react-router-dom';


const Header = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark fa-primary justify-content-between ">
            <div className="container">

                <h1>
                    <Link to={'/'} className="text-light" >
                    CRUD - selector redux
                    </Link>
                </h1>

            </div>
            <Link to="/products/new"
            className="btn fa-btn-action nuevo-post d-block d-md-inline-block "
            >Agregar Producto &#43;</Link>

        </nav>
    );
}
 
export default Header;