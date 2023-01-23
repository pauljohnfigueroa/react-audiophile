import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/create-action.reducer";


const addCartItem = (cartItems, productToAdd) => {
    // check if productToAdd exists in cartItems;
    const existingItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    // if it exists, update quantity
    if (existingItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        )
    }
    // else, it means that this is a new product, set the quantity to 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } :
        cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeITemToCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0,
    cartTotalAmount: 0,
});


const INITIAL_STATE = {
    cartItems: [],
    cartTotal: 0,
    cartTotalAmount: 0,
    isCartOpen: false,
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_IS_OPEN: 'SET_CART_IS_OPEN'

}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in CartReducer.`);
    }
}


export const CartProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartTotal, setCartTotal] = useState(0);
    // const [cartTotalAmount, setCartTotalAmount] = useState(0);

    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
    const { cartItems, cartTotal, cartTotalAmount, isCartOpen } = state;

    const updateCartItemsReducer = (newCartItems) => {
        // newCartTotalAmount
        const newCartTotalAmount = newCartItems.reduce((total, currentItem) => total + (currentItem.quantity * currentItem.price), 0);
        // newCartTotal
        const newCartTotal = newCartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)

        // dispatch
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartTotalAmount: newCartTotalAmount,
            })
        );
    }

    const setIsCartOpen = (bool) => {
        dispatch({ type: 'SET_CART_IS_OPEN', payload: bool });
    }

    // useEffect(() => {
    //     const total = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
    //     setCartTotal(total);
    // }, [cartItems]);

    // useEffect(() => {
    //     const totalAmount = cartItems.reduce((totalAmount, currentItem) => totalAmount + (currentItem.quantity * currentItem.price), 0);
    //     setCartTotalAmount(totalAmount);
    // }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        // setCartItems(addCartItem(cartItems, productToAdd));
        const newCartItem = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItem);
    }

    const removeITemToCart = (cartItemToRemove) => {
        // setCartItems(removeCartItem(cartItems, cartItemToRemove));
        const newCartItem = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItem);
    }

    const clearItemFromCart = (cartItemToClear) => {
        // setCartItems(clearCartItem(cartItems, cartItemToClear));
        const newCartItem = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItem);
    }

    const value = {
        setIsCartOpen,
        addItemToCart,
        removeITemToCart,
        clearItemFromCart,
        isCartOpen,
        cartItems,
        cartTotal,
        cartTotalAmount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}