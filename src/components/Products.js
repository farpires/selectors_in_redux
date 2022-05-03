import React, {Fragment} from 'react'
import Product from './Product';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';


const Products = ({products,total}) => {

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            <table className="table table-striped" >
                <thead className="fa-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th> 
                    </tr>
                    
                </thead>
                <tbody>
                    {(products.length === 0 )? 'no hay producto': (
                        products.map(products =>(
                            <Product
                                key={products.id}
                                id={products.id}
                                products={products}
                            />
                        ))
                    )}
                </tbody>
                <thead className="fa-primary table-dark">
                    <tr>
                        <th scope="col">TOTAL</th>
                        <th scope="col"></th>
                        <th scope="col">${total}</th> 
                    </tr>
                    
                </thead>
            </table>
        </Fragment>
     );
}
/* SEELCTOR MEMORIZADO */
 const calculateTotal = createSelector(
    state => state.products, 
    products =>{
     return products.reduce((subtotal,products) => subtotal+products.price,0)
    }
 );

const mapStateToProps = state =>({
    products: state.products,
    total: calculateTotal(state)
})

export default connect(mapStateToProps,null)(Products);
