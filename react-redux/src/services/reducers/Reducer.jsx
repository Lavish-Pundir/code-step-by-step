import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants"

const initialState = {
     cartData: []
}

export default function cardItems(state = initialState, action) {
  switch (action.type) {

    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.data]
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.slice(0, -1)
      }

    default:
      return state
  }
}