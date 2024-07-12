import { createStore } from "redux";
import reducer from "./reducer";
import rootReducers from "./rootReducer";

// const store = createStore(reducer);
console.log(reducer);
console.log(rootReducers);

const store = createStore(rootReducers);

export default store;
