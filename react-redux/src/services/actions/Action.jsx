import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";

export const addToCart = (data) => {
    // console.log('Action', data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeFromCart = () => {
    console.log('Remove Action');
    return {
        type: REMOVE_FROM_CART
    }
}