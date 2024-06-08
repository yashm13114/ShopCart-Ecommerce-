import React, { createContext, useContext, useEffect, useReducer } from 'react';
import cartReducer from '../reducer/cart_reducer';

const CartContext = createContext();
const getLocalCartData = () => {
    const localCartData = localStorage.getItem("shopcart");
    if (!localCartData || localCartData === "[]") {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};
const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (id, amount, color, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } });
    };
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id } });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };
    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    };

    useEffect(() => {
        dispatch({ type: "CAR_TOTAL_ITEM" });
        dispatch({ type: "TOTAL_PRICE" });
        localStorage.setItem("shopcart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrement }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };
