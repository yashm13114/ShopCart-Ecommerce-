// import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { useProductContext } from "./productcontext";
// import reducer from "../reducer/filter_reducer";

// const FilterContext = createContext();
// const initialState = {
//     filter_products: [],
//     all_products: [],
//     grid_view: true,
//     sorting_value: "lowest"
// };

// export const FilterContextProvider = ({ children }) => {
//     const { products } = useProductContext();

//     const [state, dispatch] = useReducer(reducer, initialState);

//     const setGridView = () => dispatch({ type: "SET_GRIDVIEW" });
//     const setListView = () => dispatch({ type: "SET_LISTVIEW" });
//     const sorting = (event) => {
//         const sortValue = event.target.value;
//         dispatch({ type: "GET_SORTING_VALUE", payload: sortValue });
//     };

//     useEffect(() => {
//         dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
//     }, [products]);

//     useEffect(() => {
//         dispatch({ type: "SORTING_PRODUCTS" });
//     }, [state.sorting_value, state.filter_products]);

//     return (
//         <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
//             {children}
//         </FilterContext.Provider>
//     );
// };

// export const useFilterContext = () => {
//     return useContext(FilterContext);
// };
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filter_reducer";

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        mimPrice: 0,
    }
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => dispatch({ type: "SET_GRIDVIEW" });
    const setListView = () => dispatch({ type: "SET_LISTVIEW" });
    // clear the filters
    const clearFilters = () => dispatch({ type: "CLEAR_FILTERS" });
    const sorting = (sortValue) => dispatch({ type: "GET_SORTING_VALUE", payload: sortValue });

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

    useEffect(() => {
        if (products.length) {
            dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
        }
    }, [products]);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [state.sorting_value, state.all_products, state.filters]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};

