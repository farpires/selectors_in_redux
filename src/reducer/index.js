import { createStore } from 'redux'
import products from './products.reducer'
const store = createStore(products);


export default store;