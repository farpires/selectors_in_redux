import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './reducer/index';
 


function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header/>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route exact path="/products/new" component={NewProduct}/>
          <Route exact path="/products/update/:id" component={UpdateProduct}/>
        </Switch>
      </div>
      </Provider> 
   </Router>
  );
}

export default App;
