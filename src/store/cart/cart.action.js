import { createAction } from "../../utils/reducer/create-action.reducer";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addCartItem = (cartItems, productToAdd, itemQuantity) => {
    // check if productToAdd exists in cartItems;
    const existingItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    // if it exists, update quantity
    if (existingItem) {

        let qty = 1;

        if (itemQuantity > 1) {
            qty = itemQuantity;
        }

        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + qty } :
            cartItem
        )

    }

    // else, it means that this is a new product, set the quantity to 1
    if (itemQuantity > 1) {
        return [...cartItems, { ...productToAdd, quantity: itemQuantity }];
    }
    else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
}


export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } :
        cartItem
    )
}


export const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)


export const removeAllCartItems = (cartItems) => cartItems.filter((cartItem) => cartItem.quantity === 0)

/** Action Creators */

// setCartItems(addCartItem(cartItems, productToAdd));
export const addItemToCart = (cartItems, productToAdd, itemQuantity) => {
    const newCartItem = addCartItem(cartItems, productToAdd, itemQuantity);
    // updateCartItemsReducer(newCartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // setCartItems(removeCartItem(cartItems, cartItemToRemove));
    const newCartItem = removeCartItem(cartItems, cartItemToRemove);
    // updateCartItemsReducer(newCartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}


export const clearItemFromCart = (cartItems, cartItemToClear) => {
    // setCartItems(clearCartItem(cartItems, cartItemToClear));
    const newCartItem = clearCartItem(cartItems, cartItemToClear);
    // updateCartItemsReducer(newCartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}

export const removeAllItemsFromCart = (cartItems) => {
    // setCartItems(clearCartItem(cartItems, cartItemToClear));
    const newCartItem = removeAllCartItems(cartItems);
    // updateCartItemsReducer(newCartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}
