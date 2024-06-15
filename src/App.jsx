// import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
// import { Products } from './components/Products';
// import { About } from './components/About';
// import { Header } from './components/header/Header';
// import { Contact } from './components/Contact';
// import { SingleProduct } from './components/SingleProduct';
// import { Error } from './components/Error';
// import { Home } from './components/Home';
// import { ProductPage } from './components/ProductPage';
// import Cart from './components/Cart';
// import { Login } from './components/Login'
// import { SignUp } from './components/SignUp'
// import { reducer,inintialState } from './components/reducer/useReducer'
// import { PasswordReset } from './components/PasswordReset'
// import { ForgotPass } from './components/ForgotPass'
// import { createContext, useReducer } from 'react';
// import LogOut from './components/LogOut';


// export const Usercontext = createContext();
// const Routning = () => {
//   return (
//     <HashRouter>
//       <Header /> {/* Place Header inside BrowserRouter */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<ProductPage />} />
//         <Route path="/singleproduct/:id" element={<SingleProduct />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/forgotpass/:id/:token" element={<ForgotPass />} />
//         <Route path="/password-reset" element={<PasswordReset />} />
//         <Route path="/logout" element={<LogOut />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </HashRouter>
//   )
// }
// function App() {
//   const [state, dispatch] = useReducer(reducer, inintialState)
//   return (
//     <>
//       <Usercontext.Provider value={{state,dispatch}}>
//         <Routning />

//       </Usercontext.Provider>

//     </>
//   )
// }

// export default App;
// App.js
import React, { createContext, useReducer } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { Products } from './components/Products';
import { About } from './components/About';
import { Header } from './components/header/Header';
import { Contact } from './components/Contact';
import { SingleProduct } from './components/SingleProduct';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { ProductPage } from './components/ProductPage';
import Cart from './components/Cart';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { PasswordReset } from './components/PasswordReset';
import { ForgotPass } from './components/ForgotPass';
import LogOut from './components/LogOut';
import { UserProvider } from './components/context/UserContext';  // Import UserProvider

const Routing = () => {
    return (
        <HashRouter>
            <Header /> {/* Place Header inside BrowserRouter */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotpass/:id/:token" element={<ForgotPass />} />
                <Route path="/password-reset" element={<PasswordReset />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </HashRouter>
    );
};

function App() {
    return (
        <UserProvider>  {/* Wrap everything with UserProvider */}
            <Routing />
        </UserProvider>
    );
}

export default App;
