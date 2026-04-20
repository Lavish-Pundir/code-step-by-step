import { combineReducers } from "redux";
import cardItems from "./Reducer";

export default combineReducers({
  cartData: cardItems
});


// import {combineReducers} from 'redux'
// import cardItem from './Reducer'
// export default combineReducers({
//     cardItem
// });