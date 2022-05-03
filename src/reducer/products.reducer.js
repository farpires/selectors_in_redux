const INITIAL_STATE = {
    products:[],
};

export default function products(state =INITIAL_STATE,action){
    switch(action.type){
        case 'ADD_PRODUCT':
            console.log(action);
            return {
                ...state,
                products:[...state.products, {id:state.products.length, name: action.state.name, price: action.state.price}]
            }; 
        case 'DELETE_PRODUCT':
            return {
                ...state,products: state.products.filter( product => product.id !== action.state.id)
            };
        case 'UPDATE_PRODUCT':
            const {id, name , price} =action.state;
            state.products[id] = {id:parseInt(id),name,price:parseFloat(price)}
            return {
                ...state,products: state.products,
            };
        default:
            return state;
    }
}