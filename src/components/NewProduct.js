import React, {useState} from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const NewProduct = ({history,addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(null);
    const onSubmit = e =>{
      e.preventDefault();
    if(name.trim() === '' || price <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Ambos campos son obligatorios',
            text: 'hubo un error'
        })
        return;
    }
        addProduct(name,price)
        history.push('/');
    };
    
    return ( 
      <div className="row justify-content-center ">
          <div className="col-md-8">
              <div className="card">
                  <div className="card-body fa-primary">
                      <h2 className="text-center mb-4 font-weight-bold">
                          Agregar Nuevo Producto 
                      </h2>
                      <form
                      onSubmit={onSubmit}
                      >
                          <div className="form-group">
                              <label>Nombre Producto</label>
                              <input type="text" 
                              className="form-control"
                              placeholder="Nombre Producto"
                              name="name"
                              value={name}
                              onChange={e => setName(e.target.value)}
                              />
                          </div>
                          <div className="form-group">
                              <label>Precio Producto</label>
                              <input 
                              type="number" 
                              className="form-control"
                              placeholder="Precio Producto"
                              nombre="price"
                              value={price}
                              onChange={e => setPrice(Number(e.target.value))}
                              />
                          </div>
                          <button 
                          type="submit" 
                          className="btn fa-btn-action font-weight-bold text-uppercase d-block w-100"
                          >Agregar</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
     );
}

const mapDispatchToProps = dispatch =>({
    addProduct: (name, price)=> dispatch({type: 'ADD_PRODUCT',state:{name,price}}),
 });

export default connect(null,mapDispatchToProps)(NewProduct);
