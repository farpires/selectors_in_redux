 import React from 'react';
 import { connect } from 'react-redux';
 import { createSelector } from 'reselect';


 const Cart = ({cart,total, addProduct,setShipping }) => {
     return <div>
         <h1>Carito</h1>
         <p>
             Items: <strong>{cart.items.length}</strong>
         </p>
         <p>
             Flete: <strong>{cart.shipping_value}</strong>
         </p>
         <p>
             Total: <strong>{total}</strong>
         </p>
         <button onClick={addProduct} >Agregar Producto</button>
         <button onClick={setShipping} >Calcular Envio</button>
     </div>;
 }

//* SEELCTOR MEMORIZADO */
const calculateTotal = createSelector(
    state => state.items, 
    state => state.shipping_value, 
    (items, shipping_value) =>{
        return (
        items.reduce((subtotal,item) => subtotal+item.price,0)+
        shipping_value
        )
    }
);

/* SELECTOR MEMORIZADO */
//  const calculateTotal = createSelector(
// //state completo | state.item, lo que devuelve  
//     state => state.items, 
//     items =>{
//      return items.reduce((subtotal,item) => subtotal+item.price,0)
//     }

//  );



/* SEELCTOR MEMORIZADO */
 const mapStateToProps = state =>({
    cart: state,
    total: calculateTotal(state)
})


 /** SELECTOR NO MEMORIZADO */
//  const mapStateToProps = state =>({
//      cart: state,
//      total: state.items.reduce((subtotal,item) => subtotal+item.price,0), // selector dentro de redux
//  })

 //action
 const mapDispatchToProps = dispatch =>({
    addProduct: ()=> dispatch({type: 'ADD'}),
    setShipping: ()=> dispatch({type: 'SET_SHIPPING'}),
 });
  
 export default connect(mapStateToProps,mapDispatchToProps)(Cart);