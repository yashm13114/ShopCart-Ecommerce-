import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import productReducer from "../reducer/Productreducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  IsSingleLoading: false,
  singleProduct: {}
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      // console.log(products); // Debugging: log the API response
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error(error);
    }
  };
  const getSinleProducts = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleproducts = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCTS", payload: singleproducts });
    } catch (error) {
        dispatch({ type: "SET_SINGLE_ERROR" });
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return <AppContext.Provider value={{ ...state,getSinleProducts }}>{children}</AppContext.Provider>;
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
