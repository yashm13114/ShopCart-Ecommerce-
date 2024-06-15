import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './components/context/productcontext.jsx'
import { AuthProvider } from '../src/components/context/AuthContext.jsx';
import { FilterContextProvider } from './components/context/filter-context.jsx'
import { CartProvider } from './components/context/cart_context.jsx'
// auth stuff
import { Provider } from 'react-redux'
import store from './auth/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <Provider store={store}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Provider>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>,
)
