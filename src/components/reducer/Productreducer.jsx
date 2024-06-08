import React from 'react'

const Productreducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, IsLoading: true }
        case "SET_API_DATA":
            const featureData = action.payload.filter((currentElem) => {
                return currentElem.featured === true;
            })
            return { ...state, IsLoading: false, products: action.payload, featureProducts: featureData }
        case "API_ERROR":
            return { ...state, IsLoading: false, IsError: true }
        case "SET_SINGLE_LOADING":
            return { ...state, IsSingleLoading: true }
        case "SET_SINGLE_PRODUCTS":
            return { ...state, IsSingleLoading: false, singleProduct: action.payload }
        case "SET_SINGLE_ERROR":
            return { ...state, IsSingleLoading: false, IsError: true }
        default:
            return state
    }

}
export default Productreducer;