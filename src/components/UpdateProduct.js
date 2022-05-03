import React,{useState} from 'react';
import { connect} from 'react-redux';
import { useHistory } from 'react-router-dom';



const UpdateProduct = ({match:{params:{id}},updateProduct}) => {
  const history = useHistory();
  const [ products , setProducts ] = useState({
    name:'',
    price:0
  })
  
  const onSubmit=e=>{
    e.preventDefault();
    updateProduct(id,name,price)
    history.push('/')
  }

  const onChange=e=>{
      setProducts({
        ...products,
        [e.target.name]:e.target.value
      })
  }
   

  const {name,price}=products;

    return ( 
      <div className="row justify-content-center ">
      <div className="col-md-8 ">
           <div className="card fa-primary ">
               <div className="card-body">
                   <h2 className="text-center mb-4 font-weight-bold">
                       Editar Producto
                   </h2>
                   <form
                   onSubmit={onSubmit}
                   >
                     <div className="form-group">
                       <label>Nombre del Producto</label>
                       <input 
                       type="text"
                       className="form-control"
                       placeholder="Nombre del Producto"
                       name="name"
                       value={name}
                       onChange={onChange}
                       />
                     </div>
                     <div className="form-group">
                       <label>Precio del Producto</label>
                       <input 
                       type="number"
                       className="form-control"
                       placeholder="Precio del Producto"
                       name="price"
                       value={price}
                       onChange={onChange}
                       />
                     </div>
                     <button className="btn fa-btn-action font-weight-bold text-uppercase d-block w-100" type="submit">Guardar Cambios</button>
                   </form>
               </div>
           </div>
      </div>
    </div>
     );
}



const mapDispatchToProps = dispatch =>({
  updateProduct: (_id,_name,_price)=> dispatch({type: 'UPDATE_PRODUCT',state:{id:_id, name:_name, price: _price}}),
});

 

export default connect(null,mapDispatchToProps)(UpdateProduct);