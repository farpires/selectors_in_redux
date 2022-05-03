import React from 'react';
import { useHistory } from 'react-router-dom';  
import Swal from 'sweetalert2';
import { connect } from 'react-redux';

const Product = ({products,deleteProduct}) => {
    
    const {name, price, id } = products;
    const history = useHistory(); 

    const onClickDeleteProduct = id =>{
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, eliminar!!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                deleteProduct(id)
            }
          })
    }
    const onClickUpdateProduct = producto => {
        history.push(`/products/update/${producto.id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">${price}</span></td>
            <td className="acciones">
                <button 
                type="button"
                onClick={()=>onClickUpdateProduct(products)}
                className="btn fa-btn-warning mr-2">
                    Editar
                </button>
                <button
                type="button"
                className="btn fa-btn-danger"
                onClick={() => onClickDeleteProduct(id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
const mapDispatchToProps = dispatch =>({
    deleteProduct: (id)=> dispatch({type: 'DELETE_PRODUCT',state:{id}}),
 });

export default connect(null,mapDispatchToProps)(Product);