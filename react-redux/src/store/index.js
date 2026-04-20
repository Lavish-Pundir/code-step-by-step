import { createStore } from "redux";
import rootReducer from "../services/reducers/Index";

const store = createStore(rootReducer);
console.log("store", store)

export default store;