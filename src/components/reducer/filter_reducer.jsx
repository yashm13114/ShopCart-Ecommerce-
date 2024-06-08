const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let PriceArr = action.payload.map((currElem) => currElem.price)
            let maxPrice = Math.max(...PriceArr);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }
            };
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true
            };
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false
            };
        case "GET_SORTING_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let sortedProducts = [...state.filter_products];
            const { sorting_value } = state;

            if (sorting_value === "lowest") {
                sortedProducts.sort((a, b) => a.price - b.price);
            }
            if (sorting_value === "highest") {
                sortedProducts.sort((a, b) => b.price - a.price);
            }
            if (sorting_value === "a-z") {
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            }
            if (sorting_value === "z-a") {
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                filter_products: sortedProducts,
            };
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice, // ensure this is correctly updated
                    maxPrice: state.filters.maxPrice,
                },
            };
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];
            const { text, category, company, color, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.name.toLowerCase().includes(text.toLowerCase());
                });
            }
            if (price) {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.price <= price;
                });
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.category === category;
                });
            }
            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.company === company;
                });
            }
            if (color !== "all") {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.colors.includes(color)
                });
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            };
        default:
            return state;
    }
};

export default filterReducer;
