import { createStore } from "redux";
import reducers from "./reducers/index";


const store = createStore(
    reducers, {}, +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

//single product
fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))


//all product
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))