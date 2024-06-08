// const cartReducer = (state, action) => {
//     if (action.type === "ADD_TO_CART") {
//       let { id, amount, color, product } = action.payload;
//       let cartProduct = {
//         id: id + color,
//         name: product.name,
//         color,
//         amount,
//         image: product.image[0].url,
//         price: product.price,
//         max: product.stock
//       };
//       return {
//         ...state,
//         cart: [...state.cart, cartProduct]
//       };
//     }
//     if (action.type === "REMOVE_ITEM") {
//         let updatedCart = state.cart.filter((currItem) => currItem.id !== action.payload.id);
//         return {
//             ...state,
//             cart: updatedCart
//         };
//     }
//     return state;
//   }

//   export default cartReducer;
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const { id, amount, color, product } = action.payload;
            let existingProduct = state.cart.find((currElem) => currElem.id == id + color)
            if (existingProduct) {
                let updatedProduct = state.cart.map((currElem) => {
                    if (currElem.id == id + color) {
                        let newAmount = currElem.amount + amount;
                        if (newAmount >= currElem.max) {
                            newAmount = currElem.max;
                        }
                        return {
                            ...currElem,
                            amount: newAmount
                        }
                    } else {
                        return currElem

                    }

                })
                return {
                    ...state,
                    cart: updatedProduct
                };
            }
            else {
                const cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock
                };
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                };
            }


        case "REMOVE_ITEM":
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cart: updatedCart
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };
        case "CAR_TOTAL_ITEM":
            let updatedItemValue = state.cart.reduce((initialVal, curElem) => {
                let { amount } = curElem;
                initialVal = initialVal + amount;
                return initialVal
            }, 0)
            return {
                ...state,
                total_item: updatedItemValue
            };
        case "TOTAL_PRICE":
            let updatedPriceValue = state.cart.reduce((initialVal, curElem) => {
                let { price, amount } = curElem;
                initialVal = initialVal + price * amount;
                return initialVal;
            }, 0);
            return {
                ...state,
                total_price: updatedPriceValue
            };
        case "SET_DECREMENT":
            let updatedData = state.cart.map((currElem) => {
                if (currElem.id === action.payload) {
                    let decAmount = currElem.amount - 1;
                    if (decAmount <= 0) {
                        decAmount = 1
                    }
                    return {
                        ...currElem,
                        amount: decAmount
                    }
                } else {
                    return currElem
                }
            })
            return {
                ...state,
                cart: updatedData
            };
        case "SET_INCREMENT":
            let updatedproduct = state.cart.map((currElem) => {
                if (currElem.id === action.payload) {
                    let incAmount = currElem.amount + 1;
                    if (incAmount >= currElem.max) {
                        incAmount = currElem.max;
                    }
                    return { ...currElem, amount: incAmount };
                } else {
                    return currElem;
                }
            });
            return { ...state, cart: updatedproduct };
        default:
            return state;

    }
};
export default cartReducer;
